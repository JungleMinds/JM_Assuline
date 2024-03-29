import React, { useState, useEffect, useCallback } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Utils
import { normalizeNavData } from '../util/data'

// Components
import ToastBarComponent from './toastBar'
import Icon from './icons/icon'
import Hamburger from './hamburger'
import NavLinks from './navLinks'
import StickyPhoneButton from './stickyPhoneButton'

// Styles
import colors, { white, yellow } from '../styles/colors'
import mediaQueries, { breakpoints } from '../styles/mediaQueries'
import { appear, appearFrom, slideDownAnimation } from '../styles/animations'

interface IChildProps {
  isOpen?: boolean
  isScrolled?: boolean
  toasterHeight?: number
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [toasterHeight, setToasterHeight] = useState<number>(0)

  const queryData = useStaticQuery(graphql`
    query NavQuery {
      allPrismicContentPage(
        filter: {
          url: { nin: ["/privacy-statement", "/disclaimer"] }
          data: { toaster_active: { eq: true } }
        }
      ) {
        edges {
          node {
            url
            type
            uid
            data {
              toaster_title
              toaster_link_label
              toaster_active
            }
            last_publication_date
          }
        }
      }
      prismicHomePage {
        url
        uid
        type
      }
      prismicMortgagePage {
        url
        uid
        type
      }
      prismicAssurancePage {
        url
        uid
        type
      }
      prismicTeamPage {
        url
        uid
        type
      }
      prismicContactPage {
        url
        uid
        type
        data {
          body {
            ... on PrismicContactPageBodyLocation {
              primary {
                location_phone
              }
            }
          }
        }
      }
    }
  `)

  const data = normalizeNavData(queryData)

  const toasterRef = useCallback(node => {
    if (node !== null) {
      setToasterHeight(node.getBoundingClientRect().height)
    } else if (node === null) {
      setToasterHeight(0)
    }
  }, [])

  const handleResize = () => {
    if (window.innerWidth >= breakpoints.L && isOpen) {
      setIsOpen(false)
    }
  }

  const handleScroll = () => {
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    if (window.innerWidth >= breakpoints.L) {
      if (top > 82 && !isScrolled) {
        setIsScrolled(true)
      } else if (top < 82 && isScrolled) {
        setIsScrolled(false)
      }
    }
  }

  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, handleResize])

  return (
    <>
      {data.toaster && <MobileToastBar {...data.toaster} />}
      <ScreenLayer isOpen={isOpen}>
        <HideOverflowX>
          <MobileNavBackground isOpen={isOpen} />
          <Hamburger isOpen={isOpen} handleClick={handleClick} />
          <MobileNavContainer isOpen={isOpen}>
            <Link to={data.nav[0].url}>
              <MobileNavLogo
                icon="logo"
                width={200.2}
                height={104}
                inverse
                isScrolled={isScrolled}
                payoff
              />
            </Link>
            <NavLinks items={data.nav} />
          </MobileNavContainer>
        </HideOverflowX>
        <ShadowBox isScrolled={isScrolled} toasterHeight={toasterHeight}>
          {data.toaster && (
            <DesktopToastBar ref={toasterRef} {...data.toaster} />
          )}
          <Container isOpen={isOpen} isScrolled={isScrolled}>
            <Wrapper isScrolled={isScrolled}>
              <DesktopLogo isScrolled={isScrolled}>
                <Link to={data.nav[0].url}>
                  <Icon
                    icon="logo"
                    width={200.2}
                    height={104}
                    isScrolled={isScrolled}
                    payoff={!isScrolled}
                  />
                </Link>
              </DesktopLogo>
              <NavContainer isScrolled={isScrolled}>
                <NavLinks items={data.nav} subtle={isScrolled} />
              </NavContainer>
            </Wrapper>
          </Container>
        </ShadowBox>
      </ScreenLayer>
      <MobileLogo to={data.nav[0].url}>
        <Icon
          icon="logo"
          width={200.2}
          height={104}
          isScrolled={isScrolled}
          payoff={!isScrolled}
        />
      </MobileLogo>
      <StickyPhoneButton phoneNumber={data.phone} />
      <ContentPusher toasterHeight={toasterHeight} />
    </>
  )
}

export default Navigation

const MobileToastBar = styled(ToastBarComponent)`
  ${appearFrom('top')}

  ${mediaQueries.from.breakpoint.L`
    display: none;
  `}
`

const ScreenLayer = styled.div<IChildProps>`
  /* fallback for the browser which doesn't support sticky */
  position: fixed;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  ::before {
    content: '';
    pointer-events: none;
    opacity: ${props => (props.isOpen ? 1 : 0)};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(
      ${colors.dark.channels.red},
      ${colors.dark.channels.green},
      ${colors.dark.channels.blue},
      0.16
    );
    transition: opacity 0.2s ease;
  }

  ${mediaQueries.from.breakpoint.L`
    position: fixed;
    top: 0;
  `}
`

const DesktopToastBar = styled(ToastBarComponent)`
  display: none;

  ${mediaQueries.from.breakpoint.L`
    display: block;
  `}
`

const HideOverflowX = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  pointer-events: none;
  z-index: 10;

  ${mediaQueries.from.breakpoint.L`
    display: none;
  `}
`

const MobileNavBackground = styled.div<IChildProps>`
  background: ${yellow};
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '-182px' : '16px')};
  left: ${({ isOpen }) => (isOpen ? '-200px' : 'calc(100% - 72px)')};
  border-radius: 50%;
  /* fallback for browsers which max() isn't supported */
  ${({ isOpen }) => isOpen && `width: 680px; height: 680px;`}
  width: ${({ isOpen }) => (isOpen ? 'max(100vw + 342px, 680px)' : '56px')};
  height: ${({ isOpen }) => (isOpen ? 'max(100vw + 342px, 680px)' : '56px')};
  box-shadow: 0 4px 16px
    rgba(
      ${colors.darkest.channels.red},
      ${colors.darkest.channels.green},
      ${colors.darkest.channels.blue},
      0.16
    );
  transition: top 0.5s ease, left 0.5s ease, width 0.5s ease, height 0.5s ease;
  ${appear}

  ${mediaQueries.from.breakpoint.S`
    top: ${(props: { isOpen: boolean }) => (props.isOpen ? '-282px' : '24px')};
    left: ${(props: { isOpen: boolean }) =>
      props.isOpen ? '-200px' : 'calc(100% - 76px)'};

    /* fallback for browsers which max() isn't supported */
    ${(props: { isOpen: boolean }) =>
      props.isOpen && `width: 980px; height: 880px;`}
    /* duplicate style because of non-supporting browsers */
    width: ${(props: { isOpen: boolean }) =>
      props.isOpen ? 'max(100vw + 342px, 680px)' : '56px'};
    height: ${(props: { isOpen: boolean }) =>
      props.isOpen ? 'max(100vw + 342px, 680px)' : '56px'};
  `}

  ${mediaQueries.from.breakpoint.M`
    top: ${(props: { isOpen: boolean }) => (props.isOpen ? '-587px' : '24px')};
    left: ${(props: { isOpen: boolean }) =>
      props.isOpen ? '-320px' : 'calc(100% - 76px)'};

    /* fallback for browsers which max() isn't supported */
    ${(props: { isOpen: boolean }) =>
      props.isOpen && `width: 1300px; height: 1080px;`}
    /* duplicate style because of non-supporting browsers */
    width: ${(props: { isOpen: boolean }) =>
      props.isOpen ? 'max(100vw + 342px, 680px)' : '56px'};
    height: ${(props: { isOpen: boolean }) =>
      props.isOpen ? 'max(100vw + 342px, 680px)' : '56px'};
  `}

  ${mediaQueries.from.breakpoint.L`
      display: none;
  `}
`

const MobileNavContainer = styled.nav<IChildProps>`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 16px 16px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
  transition: opacity 0.2s ease ${({ isOpen }) => isOpen && `.2s`};

  ${mediaQueries.from.breakpoint.S`
    padding-left: 20px;
  `}

  ${mediaQueries.from.breakpoint.L`
      display: none;
  `}
`

const MobileNavLogo = styled(Icon)`
  margin-bottom: 32px;
`

const ShadowBox = styled.div<IChildProps>`
  display: none;

  ${mediaQueries.from.breakpoint.L`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;

    animation: ${(props: { toasterHeight: number }) =>
      slideDownAnimation(props.toasterHeight)} 0.5s ease forwards;


    ${(props: { isScrolled: boolean; toasterHeight: number }) =>
      props.isScrolled &&
      `
      animation: none;
      transform: translateY(${-1 * props.toasterHeight}px);
      box-shadow: 0 0 4px
        rgba(
          ${colors.darkest.channels.red},
          ${colors.darkest.channels.green},
          ${colors.darkest.channels.blue},
          0.16
        );
    `}
  `}
`

const Container = styled.div<IChildProps>`
  ${mediaQueries.from.breakpoint.L`
    width: 100%;
    max-width: 1920px;
    padding: 0 24px
    margin: 0 auto;
    max-height: 160px;
    background-color: ${white};

    transition: max-height 0.2s ease;
    ${(props: { isScrolled: boolean }) =>
      props.isScrolled &&
      `
      max-height: 72px;
    `}
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding-left: 64px;
    padding-right: 64px;
  `}
`

const Wrapper = styled.div<IChildProps>`
  background: ${white};
  display: flex;
  justify-content: space-between;
  max-height: 160px;

  ${mediaQueries.from.breakpoint.L`
    max-width: 1920px;
    transition: max-height 0.2s ease;
    ${(props: { isScrolled: boolean }) =>
      props.isScrolled &&
      `
      max-height: 72px;
      `}
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin: 0 auto;
  `}
`

const DesktopLogo = styled.div<IChildProps>`
  ${mediaQueries.from.breakpoint.L`
    transition: height 0.2s ease;
    height: ${(props: { isScrolled: boolean }) =>
      props.isScrolled ? '112px' : '128px'};
  `}

  ${mediaQueries.from.breakpoint.XL`
    height: ${(props: { isScrolled: boolean }) =>
      props.isScrolled ? '112px' : '160px'};
  `}
`

const NavContainer = styled.nav<IChildProps>`
  display: none;
  transition: padding 0.2s ease;

  ${mediaQueries.from.breakpoint.L`
    display: inline-block;
    /* if login link is visible, set width to 50% */
    width: 40%;
    margin-left: 32px;
    padding-top: ${(props: { isScrolled: boolean }) =>
      props.isScrolled ? '22px' : '44px'};
  `}
  ${appear}

  ${mediaQueries.from.breakpoint.XL`
    max-width: 700px;
    padding-top: ${(props: { isScrolled: boolean }) =>
      props.isScrolled ? '22px' : '64px'};
  `}
`

const MobileLogo = styled(Link)`
  display: inline-block;
  padding-left: 16px;
  margin-bottom: 16px;
  line-height: 0;

  ${mediaQueries.from.breakpoint.S`
    padding-left: 20px;
  `}

  ${mediaQueries.from.breakpoint.L`
    display: none;
  `}
`

const ContentPusher = styled.div<IChildProps>`
  transition: height 0.5s ease;

  ${mediaQueries.from.breakpoint.L`
    height: ${(props: { toasterHeight: number }) =>
      props.toasterHeight + 136}px;
      `}

  ${mediaQueries.from.breakpoint.XL`
    height: ${(props: { toasterHeight: number }) =>
      props.toasterHeight + 160}px;
  `}
`
