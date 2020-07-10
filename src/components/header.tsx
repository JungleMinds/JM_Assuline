import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// Utils
import { isBiggerOrEqual as isBiggerOrEqualScreen } from "../util/screenSize"

// Components
import ContainerComponent from "./container"
import Button from "./button"
import IconComponent from "./icons/icon"

// Styles
import * as textStyles from "../styles/textStyles"
import mediaQueries, { breakpoints } from "../styles/mediaQueries"
import aspectRatio, { aspectRatioChild } from "../styles/aspectRatio"
import { yellow } from "../styles/colors"

// Types
import { HeaderTypes, IButton } from "../types/entities"
export interface IProps {
  title: string
  paragraph?: any
  usps?: string[]
  buttons?: IButton[]
  image: string
  type: HeaderTypes
}

const Header: React.FC<IProps> = ({
  title,
  paragraph,
  buttons,
  usps,
  image,
  type,
}) => {
  const isLargeScreen = isBiggerOrEqualScreen(breakpoints.L)
  const [isWide, setIsWide] = useState(isLargeScreen)

  const handleResize = () => {
    if (window.innerWidth >= breakpoints.L && !isWide) {
      setIsWide(true)
    } else if (window.innerWidth < breakpoints.L && isWide) {
      setIsWide(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [handleResize])

  return (
    <Container>
      <ImageContainer>
        <Image background={image} />
        <Lines icon="lines" color={yellow} large={isWide} />
      </ImageContainer>
      <Wrapper>
        <Title type={type}>{title}</Title>
        {paragraph && <Text type={type}>{paragraph}</Text>}
        {usps && (
          <List>
            {usps.map(item => (
              <ListItem key={`usps-item-${item}`}>
                <Icon icon="check" color={yellow} />
                {item}
              </ListItem>
            ))}
          </List>
        )}
        {buttons && (
          <ButtonWrapper>
            {buttons.map(button => (
              <Link to={button.url} key={`header-button-${button.label}`}>
                <StyledButton icon>{button.label}</StyledButton>
              </Link>
            ))}
          </ButtonWrapper>
        )}
        {/* {buttonLabel && (
          <StyledLink to={`/${buttonUrl}`}>
            <Button icon>{buttonLabel}</Button>
          </StyledLink>
        )}
        {buttons && (
          <div>
            {buttons.map(button => (
              <Link
                to={button.buttonUrl}
                key={`header-button-${button.buttonLabel}`}
              >
                <StyledButton icon>{button.buttonLabel}</StyledButton>
              </Link>
            ))}
          </div>
        )} */}
      </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled(ContainerComponent)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 0;
  max-width: 1920px;

  ${mediaQueries.from.breakpoint.L`
    flex-direction: row-reverse;
  `}
`

const ImageContainer = styled.div`
  ${aspectRatio(375, 248)}
  margin: 0;
  margin-bottom: 16px;
  z-index: -1;

  ${mediaQueries.from.breakpoint.M`
    ${aspectRatio(768, 512)}
    margin-bottom: 24px;
  `}

  ${mediaQueries.from.breakpoint.L`
    ${aspectRatio(512, 512)}
    flex: 1 0 50%;
  `}
`

const Image = styled.div<{ background?: string }>`
  ${aspectRatioChild}

  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-position: center center;
`

const Lines = styled(IconComponent)`
  ${aspectRatioChild}
`

const Wrapper = styled.div`
  padding: 0 16px 24px;

  ${mediaQueries.from.breakpoint.M`
    padding: 0 24px 112px;
  `}

  ${mediaQueries.from.breakpoint.L`
    padding: 48px 32px 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding: 0 32px 0 64px;
  `}
`

const Title = styled.h1<{ type: string }>`
  ${props =>
    props.type === "Home" ? textStyles.headingLoud : textStyles.headingBig}
  margin: 0;
  margin-bottom: 16px;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 32px;
  `}
`

const List = styled.ul`
  margin-bottom: 8px;
  padding: 0;
  list-style: none;
`

const ListItem = styled.li`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`

const Icon = styled(IconComponent)`
  margin-right: 12px;
`

const Text = styled.p<{ type: string }>`
  ${props =>
    props.type === "Home" ? textStyles.plainLoud : textStyles.plainNormal}
  margin: 0;
  margin-bottom: 24px;

  ${mediaQueries.from.breakpoint.S`
    margin-bottom: 32px;
  `}
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const StyledButton = styled(Button)`
  margin-right: 16px;
`
