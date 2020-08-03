import React from 'react'
import styled from 'styled-components'

// Components
import ButtonComponent from './button'

// Styles
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'

// Types
import { IButton } from '../types/entities'

interface IProps {
  title: string
  paragraph: string
  buttons: IButton[]
}

const NotFound: React.FC<IProps> = ({ title, paragraph, buttons }) => (
  <Container>
    <Title>{title}</Title>
    <Paragraph>{paragraph}</Paragraph>
    <ButtonWraper>
      {buttons.map(button => (
        <Button icon to={button.url}>
          {button.label}
        </Button>
      ))}
    </ButtonWraper>
  </Container>
)

export default NotFound

const Container = styled.div`
  margin: 0 16px 64px;
  padding-top: 40px;

  ${mediaQueries.from.breakpoint.M`
    max-width: 848px;
    margin: 0 auto 64px;
    padding: 80px 20px 0;
  `}
`

const Title = styled.h1`
  ${textStyles.headingBig}
  margin: 0 0 16px;
`

const Paragraph = styled.p`
  ${textStyles.plainLoud}
  margin: 0 0 24px;
`

const ButtonWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${mediaQueries.from.breakpoint.M`
    display: block;
  `}
`

const Button = styled(ButtonComponent)`
  margin-bottom: 24px;

  :last-child {
    margin: 0;
  }

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 0;
    margin-right: 40px;

    :last-child {
      margin-right: 0;
    }
  `}
`
