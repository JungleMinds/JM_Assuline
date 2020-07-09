import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// Components
import Icon from "./icons/icon"
import Hamburger from "./hamburger"
import NavLinks from "./navLinks"

// Styles
import colors, { white, yellow } from "../styles/colors"
import mediaQueries, { breakpoints } from "../styles/mediaQueries"

interface IProps {
  isOpen?: boolean
  isScrolled?: boolean
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleResize = () => {
    if (window.innerWidth >= breakpoints.M && isOpen) {
      setIsOpen(false)
    }
  }

  const handleScroll = () => {
    if (window.innerWidth >= breakpoints.M) {
      if (window.scrollY > 72 && !isScrolled) {
        setIsScrolled(true)
      } else if (window.scrollY < 72 && isScrolled) {
        setIsScrolled(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll, handleResize])

  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <>
      <ContentPusher />
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
            <Icon
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
    </>
  )
}

export default Navigation

const ContentPusher = styled.div`
  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 128px;
  `}

  ${mediaQueries.from.breakpoint.L`
    margin-bottom: 160px;
  `}
`

const Container = styled.div<IProps>`
  position: relative;
  background: ${white};
  margin-bottom: 16px;
  padding: 0 16px;
  max-height: 160px;

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
    margin-bottom: 0;
  `}

  ${mediaQueries.from.breakpoint.M`
    position: fixed;
    top: 0;
    width: 100%;
    ${(props: { isScrolled: boolean }) =>
      props.isScrolled &&
      `
      max-height: 72px;
      box-shadow: 0 0px 4px
        rgba(
          ${colors.darkest.channels.red},
          ${colors.darkest.channels.green},
          ${colors.darkest.channels.blue},
          0.16
        );
      transition: max-height 0.2s ease;
    `}
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

  ${mediaQueries.from.breakpoint.M`
    position: relative;
    max-width: 1312px;
    padding-left: 24px;
    padding-right: 24px;
    transition: max-height 0.2s ease;
    ${(props: { isScrolled: boolean }) =>
      props.isScrolled &&
      `max-height: 72px;
      padding-top: 16px;
      `}
  `}

  ${mediaQueries.from.breakpoint.L`
    padding-top: ${(props: { isScrolled: boolean }) =>
      props.isScrolled ? "16px" : "32px"};
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding-left: 64px;
    padding-right: 64px;
    margin: 0 auto;
  `}
`

const LogoLinkContainer = styled.div<IProps>`
  height: 88px;
  transition: height 0.2s ease;

  ${mediaQueries.from.breakpoint.S`
    height: 104px;
  `}

  ${mediaQueries.from.breakpoint.M`
    ${(props: { isScrolled: boolean }) => props.isScrolled && "height: 96px;"}
  `}

  ${mediaQueries.from.breakpoint.L`
    height: ${(props: { isScrolled: boolean }) =>
      props.isScrolled ? "96px" : "128px"};
  `}
`

const NavContainer = styled.nav<IProps>`
  display: none;
  transition: padding 0.2s ease;

  ${mediaQueries.from.breakpoint.M`
    display: inline-block;
    width: 66%;
    margin-left: 32px;
    padding-top: ${(props: { isScrolled: boolean }) =>
      props.isScrolled ? "6px" : "24px"};
  `}

  ${mediaQueries.from.breakpoint.L`
    width: 50%;
    ${(props: { isScrolled: boolean }) =>
      !props.isScrolled && "padding-top: 32px;"}
  `}
`

const MobileNavBackground = styled.div<IProps>`
  background: ${yellow};
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? "-182px" : "16px")};
  left: ${({ isOpen }) => (isOpen ? "-200px" : "calc(100vw - 72px)")};
  border-radius: 50%;
  width: ${({ isOpen }) => (isOpen ? "max(100vw + 342px, 680px)" : "56px")};
  height: ${({ isOpen }) => (isOpen ? "max(100vw + 342px, 680px)" : "56px")};
  box-shadow: 0 4px 16px
    rgba(
      ${colors.darkest.channels.red},
      ${colors.darkest.channels.green},
      ${colors.darkest.channels.blue},
      0.16
    );
  transition: top 0.5s ease, left 0.5s ease, width 0.5s ease, height 0.5s ease;

  ${mediaQueries.from.breakpoint.S`
    top: ${(props: { isOpen: any }) => (props.isOpen ? "-182px" : "24px")};
    left: ${(props: { isOpen: any }) =>
      props.isOpen ? "-200px" : "calc(100vw - 76px)"};
  `}

  ${mediaQueries.from.breakpoint.M`
      display: none;
  `}
`

const MobileNavContainer = styled.nav<IProps>`
  position: fixed;
  top: 0;
  left: 0;
  padding: 16px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.2s ease ${({ isOpen }) => isOpen && `.2s`};

  ${mediaQueries.from.breakpoint.S`
    padding-top: 24px;
    padding-left: 20px;
  `}

  ${mediaQueries.from.breakpoint.M`
      display: none;
  `}
`
