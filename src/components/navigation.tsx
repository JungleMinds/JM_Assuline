import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Components
import Icon from './icons/icon'
import Hamburger from './hamburger'
import NavLinks from './navLinks'

// Styles
import colors, { white, yellow } from '../styles/colors'
import mediaQueries, { breakpoints } from '../styles/mediaQueries'

interface IProps {
  isOpen?: boolean
  isScrolled?: boolean
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleResize = () => {
    if (window.innerWidth >= breakpoints.L && isOpen) {
      setIsOpen(false)
    }
  }

  const handleScroll = () => {
    const doc = document.documentElement
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    if (window.innerWidth >= breakpoints.L) {
      if (top > 72 && !isScrolled) {
        setIsScrolled(true)
      } else if (top < 72 && isScrolled) {
        setIsScrolled(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, handleResize])

  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <>
      <ContentPusher />
      <ShadowBox isScrolled={isScrolled}>
        <Container isOpen={isOpen} isScrolled={isScrolled}>
          <MobileNavBackground isOpen={isOpen} />
          <Wrapper isScrolled={isScrolled}>
            <LogoLinkContainer isScrolled={isScrolled}>
              <Link to="/">
                <Icon
                  icon="logo"
                  width={200.2}
                  height={88}
                  isScrolled={isScrolled}
                  payoff={!isScrolled}
                />
              </Link>
            </LogoLinkContainer>
            <NavContainer isScrolled={isScrolled}>
              <NavLinks subtle={isScrolled} />
            </NavContainer>
            <Hamburger isOpen={isOpen} handleClick={handleClick} />
          </Wrapper>
          <MobileNavContainer isOpen={isOpen}>
            <Link to="/">
              <MobileNavLogo
                icon="logo"
                width={200.2}
                height={88}
                inverse
                isScrolled={isScrolled}
                payoff
              />
            </Link>
            <NavLinks />
          </MobileNavContainer>
        </Container>
      </ShadowBox>
    </>
  )
}

export default Navigation

const ContentPusher = styled.div`
  ${mediaQueries.from.breakpoint.L`
    margin-bottom: 160px;
  `}
`

const ShadowBox = styled.div<IProps>`
  ${mediaQueries.from.breakpoint.L`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 160px;
    transition: height 0.2s ease;
    z-index: 9;

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
`

const Container = styled.div<IProps>`
  position: relative;
  background: ${white};
  padding: 0 16px;
  max-height: 160px;
  z-index: 9;

  ::before {
    content: "";
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

  ${mediaQueries.from.breakpoint.S`
    padding-left: 20px;
    padding-right: 20px;
  `}

  ${mediaQueries.from.breakpoint.L`
    position: fixed;
    top: 0;
    width: 100%;
    left: 50%;
    max-width: 1920px;
    padding-left: 24px;
    padding-right: 24px;
    transform: translateX(-50%);
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
  padding-top: 16px;
  max-height: 160px;

  ${mediaQueries.from.breakpoint.S`
    padding-top: 24px;
  `}

  ${mediaQueries.from.breakpoint.L`
    position: relative;
    max-width: 1920px;
    transition: max-height 0.2s ease;
    ${(props: { isScrolled: boolean }) =>
      props.isScrolled &&
      `max-height: 72px;
      padding-top: 16px;
      `}
  `}

  ${mediaQueries.from.breakpoint.L`
    padding-top: ${(props: { isScrolled: boolean }) =>
      props.isScrolled ? '16px' : '32px'};
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin: 0 auto;
  `}
`

const LogoLinkContainer = styled.div<IProps>`
  height: 88px;
  transition: height 0.2s ease;

  ${mediaQueries.from.breakpoint.S`
    height: 104px;
  `}

  ${mediaQueries.from.breakpoint.L`
    ${(props: { isScrolled: boolean }) => props.isScrolled && 'height: 96px;'}
  `}

  ${mediaQueries.from.breakpoint.L`
    height: ${(props: { isScrolled: boolean }) =>
      props.isScrolled ? '96px' : '128px'};
  `}
`

const NavContainer = styled.nav<IProps>`
  display: none;
  transition: padding 0.2s ease;

  ${mediaQueries.from.breakpoint.L`
    display: inline-block;
    width: 66%;
    margin-left: 32px;
    padding-top: ${(props: { isScrolled: boolean }) =>
      props.isScrolled ? '6px' : '24px'};
  `}

  ${mediaQueries.from.breakpoint.L`
    width: 50%;
    ${(props: { isScrolled: boolean }) =>
      !props.isScrolled && 'padding-top: 32px;'}
  `}

  ${mediaQueries.from.breakpoint.XL`
    max-width: 700px;
  `}
`

const MobileNavBackground = styled.div<IProps>`
  background: ${yellow};
  position: fixed;
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

  ${mediaQueries.from.breakpoint.S`
    top: ${(props: { isOpen: boolean }) => (props.isOpen ? '-182px' : '24px')};
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
  position: fixed;
  top: 0;
  left: 0;
  padding: 16px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  ${({ isOpen }) => !isOpen && 'pointer-events: none;'}
  transition: opacity 0.2s ease ${({ isOpen }) => isOpen && `.2s`};

  ${mediaQueries.from.breakpoint.S`
    padding-top: 24px;
    padding-left: 20px;
  `}

  ${mediaQueries.from.breakpoint.L`
      display: none;
  `}
`

const MobileNavLogo = styled(Icon)`
  margin-bottom: 32px;
`
