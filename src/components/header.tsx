import React from 'react'
import styled, { keyframes } from 'styled-components'

// Components
import ContainerComponent from './container'
import ButtonComponent from './button'
import IconComponent from './icons/icon'

// Styles
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import { yellow } from '../styles/colors'

// Types
import { HeaderTypes, IButton } from '../types/entities'

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
}) => (
  <Container>
    <ImageContainer>
      <Image background={image} />
      <Lines icon="lines" color={yellow} />
    </ImageContainer>
    <Wrapper>
      <Title type={type} numOfChar={title.length}>
        {title}
      </Title>
      {paragraph && <Text type={type}>{paragraph}</Text>}
      {usps && (
        <List>
          {usps.map(item => (
            <ListItem key={`usps-item-${item}`}>
              <Icon icon="check" width={24} color={yellow} />
              {item}
            </ListItem>
          ))}
        </List>
      )}
      {buttons && (
        <ButtonWrapper>
          {buttons.map(button => (
            <Button to={button.url} key={`header-button-${button.label}`} icon>
              {button.label}
            </Button>
          ))}
        </ButtonWrapper>
      )}
    </Wrapper>
  </Container>
)

export default Header

const Container = styled(ContainerComponent)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 0;
  max-width: 1920px;
  margin-bottom: 64px;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 80px;
  `}

  ${mediaQueries.from.breakpoint.L`
    flex-direction: row-reverse;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 160px;
  `}
`

const appear = keyframes`
  30% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const ImageContainer = styled.div`
  ${aspectRatio(375, 248)}
  margin: 0;
  margin-bottom: 16px;
  overflow: hidden;
  z-index: -1;

  ${mediaQueries.from.breakpoint.M`
    ${aspectRatio(768, 512)}
    margin-bottom: 24px;
  `}

  ${mediaQueries.from.breakpoint.L`
    ${aspectRatio(512, 512)}
    margin-bottom: 0;
    flex: 1 0 50%;
  `}
`

const Image = styled.div<{ background?: string }>`
  ${aspectRatioChild}

  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-position: center center;

  ${mediaQueries.from.breakpoint.L`
    border-radius: 2px 0 0 2px;
  `}

  ${mediaQueries.from.px(1920)`
    border-radius: 2px;
  `}
`

const Lines = styled(IconComponent)`
  ${aspectRatioChild}
  opacity: 0;
  animation: ${appear} 1s linear forwards;
`

const Wrapper = styled.div`
  padding: 0 16px;

  ${mediaQueries.from.breakpoint.M`
    padding: 0 24px;
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

const Title = styled.h1<{ type: string; numOfChar: number }>`
  ${props =>
    props.type === 'Home' && props.numOfChar < 40
      ? textStyles.headingLoud
      : textStyles.headingBig}
  margin: 0;
  margin-bottom: 16px;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 32px;
  `}
`

const List = styled.ul`
  margin-bottom: 24px;
  padding: 0;
  list-style: none;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 32px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 40px;
  `}
`

const ListItem = styled.li`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`

const Icon = styled(IconComponent)`
  margin-right: 12px;
  flex: 0 0 ${({ width }) => width}px;
`

const Text = styled.p<{ type: string }>`
  ${props =>
    props.type === 'Home' ? textStyles.plainLoud : textStyles.plainNormal}
  margin: 0;
  margin-bottom: 24px;

  ${mediaQueries.from.breakpoint.S`
    margin-bottom: 32px;
  `}
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${mediaQueries.from.px(375)`
    flex-flow: row nowrap;
  `}
`

const Button = styled(ButtonComponent)`
  align-self: flex-start;
  margin-bottom: 16px;

  :last-of-type {
    margin-bottom: 0;
  }

  :only-child {
    margin-bottom: 0;
  }

  ${mediaQueries.from.px(375)`
    margin-bottom: 0;
    margin-right: 16px;
  `}
`
