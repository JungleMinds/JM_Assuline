import React from 'react'
import styled from 'styled-components'

// Components
import RichText from './richText'
import Button from './button'

// Styles
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'

// Types
import { IButton } from '../types/entities'
interface IProps {
  title: string
  content: any
  button: IButton
}

const ContentBlock: React.FC<IProps> = ({ title, content, button }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>
        <RichText content={content.raw} />
      </Content>
      {button && (
        <Button to={button.url} icon>
          {button.label}
        </Button>
      )}
    </Container>
  )
}

export default ContentBlock

const Container = styled.div`
  margin: 0 44px 64px;
  padding: 0;

  ${mediaQueries.from.breakpoint.XL`
    max-width: 808px;
    margin: 0 auto 160px;
  `}
`

const Title = styled.h2`
  margin: 0 0 24px;

  ${textStyles.headingSubtle}
`

const Content = styled.div`
  margin-bottom: 24px;

  p {
    margin-bottom: 28px;
  }

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 40px;

    p {
      margin-bottom: 32px;
    }
  `}
`
