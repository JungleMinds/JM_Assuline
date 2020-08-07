import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useStateWithRef from '../hooks/useStateWithRef'

// Utils
import checkCookieValidity from '../util/checkCookieValidity'

// Components
import Icon from './icons/icon'
import Hamburger from './hamburger'
import NavLinks from './navLinks'
import StickyPhoneButton from './stickyPhoneButton'

// Styles
import colors, { white, yellow } from '../styles/colors'
import mediaQueries, { breakpoints } from '../styles/mediaQueries'
import { appear } from '../styles/animations'

interface IProps {
  isOpen?: boolean
  isScrolled?: boolean
  visibleToastbar?: boolean
}

// Mock data
const PHONE_NUMBER = '0623442344'

const Navigation: React.FC<IProps> = ({ visibleToastbar }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const isFixedRef = useRef(false)
  const isScrolledRef = useRef(false)
  const isToasterRef = useRef(true)

  const [isFixed, setIsFixed] = useStateWithRef<boolean>(isFixedRef)
  const [isScrolled, setIsScrolled] = useStateWithRef<boolean>(isScrolledRef)
  const [, setIsToasterVisible] = useStateWithRef<boolean>(isToasterRef)

  const handleResize = () => {
    if (window.innerWidth >= breakpoints.L && isOpen) {
      setIsOpen(false)
    }
  }

  const handleScroll = () => {
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    if (window.innerWidth >= breakpoints.L) {
      if (isToasterRef.current && !isScrolledRef.current) {
        const toastBar = document.getElementById('toast-bar')
        const toastbarHeight = toastBar && toastBar.clientHeight

        const spaceTop = (toastbarHeight && toastbarHeight) || 0

        if (top >= spaceTop && !isFixedRef.current) {
          setIsFixed(true)
        } else if (top < spaceTop && isFixedRef.current) {
          setIsFixed(false)
        }
      }

      if (top > 82 && !isScrolledRef.current) {
        setIsScrolled(true)
      } else if (top < 82 && isScrolledRef.current) {
        setIsScrolled(false)
      }
    }
  }

  useEffect(() => {
    setIsToasterVisible(!checkCookieValidity('toaster') && !!visibleToastbar)

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <>
      <ScreenLayer isOpen={isOpen} isFixed={isFixed}>
        <HideOverflowX>
          <MobileNavBackground isOpen={isOpen} />
          <Hamburger isOpen={isOpen} handleClick={handleClick} />
          <MobileNavContainer isOpen={isOpen}>
            <Link to="/">
              <MobileNavLogo
                icon="logo"
                width={200.2}
                height={104}
                inverse
                isScrolled={isScrolled}
                payoff
              />
            </Link>
            <NavLinks />
          </MobileNavContainer>
        </HideOverflowX>
        <ShadowBox isScrolled={isScrolled}>
          <Container isOpen={isOpen} isScrolled={isScrolled}>
            <Wrapper isScrolled={isScrolled}>
              <DesktopLogo isScrolled={isScrolled}>
                <Link to="/">
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
                <NavLinks subtle={isScrolled} />
              </NavContainer>
            </Wrapper>
          </Container>
        </ShadowBox>
      </ScreenLayer>
      <MobileLogo to="/">
        <Icon
          icon="logo"
          width={200.2}
          height={104}
          isScrolled={isScrolled}
          payoff={!isScrolled}
        />
      </MobileLogo>
      <StickyPhoneButton phoneNumber={PHONE_NUMBER} />
      <ContentPusher />
    </>
  )
}

export default Navigation

const ScreenLayer = styled.div<{
  isOpen: boolean
  isFixed: boolean
}>`
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
    position: ${(props: { isFixed: boolean }) =>
      props.isFixed ? 'fixed' : 'relative'};
    top: 0;

    :first-child {
      position: fixed;
    }
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

  ${mediaQueries.from.breakpoint.L`
    display: none;
  `}
`

const MobileNavBackground = styled.div<IProps>`
  background: ${yellow};
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '-182px' : '16px')};
  left: ${({ isOpen }) => (isOpen ? '-200px' : 'calc(100% - 72px)')};
  border-radius: 50%;
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
  `}

  ${mediaQueries.from.breakpoint.M`
    top: ${(props: { isOpen: boolean }) => (props.isOpen ? '-587px' : '24px')};
    left: ${(props: { isOpen: boolean }) =>
      props.isOpen ? '-320px' : 'calc(100% - 76px)'};
  `}

  ${mediaQueries.from.breakpoint.L`
      display: none;
  `}
`

const MobileNavContainer = styled.nav<IProps>`
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

const ShadowBox = styled.div<IProps>`
  display: none;

  ${mediaQueries.from.breakpoint.L`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 128px;
    transition: height 0.2s ease;
    z-index: 10;

    ${(props: { isScrolled: boolean }) =>
      props.isScrolled &&
      `
      height: 72px;
      box-shadow: 0 0 4px
        rgba(
          ${colors.darkest.channels.red},
          ${colors.darkest.channels.green},
          ${colors.darkest.channels.blue},
          0.16
        );
    `}
  `}

  ${mediaQueries.from.breakpoint.XL`
    height: ${(props: { isScrolled: boolean }) =>
      props.isScrolled ? '72px' : '160px'};
  `}
`

const Container = styled.div<IProps>`
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

const Wrapper = styled.div<IProps>`
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

const DesktopLogo = styled.div<IProps>`
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

const NavContainer = styled.nav<IProps>`
  display: none;
  transition: padding 0.2s ease;

  ${mediaQueries.from.breakpoint.L`
    display: inline-block;
    width: 50%;
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
  padding: 16px 16px 0;
  margin-bottom: 16px;
  line-height: 0;

  ${mediaQueries.from.breakpoint.S`
    padding: 24px 20px 0;
  `}

  ${mediaQueries.from.breakpoint.L`
    display: none;
  `}
`

const ContentPusher = styled.div`
  ${mediaQueries.from.breakpoint.L`
    height: 136px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    height: 160px;
  `}
`
