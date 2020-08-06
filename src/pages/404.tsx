import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import ButtonComponent from '../components/button'

// Styles
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'

// Mock data
const PAGE_DATA = {
  title: 'Helaas, deze pagina bestaat niet (meer)',
  paragraph:
    'Misschien wilde u een gratis eerste hypotheekgesprek plannen of wilde u zich goed laten verzekeren. Wij bieden onafhankelijk advies op maat, voor ondernemers & particulieren.',
  buttons: [
    { label: 'Naar hypotheken', url: '/hypotheken' },
    { label: 'Naar verzekeren', url: '/verzekeren' },
  ],
}

const NotFoundPage = () => {
  const { title, paragraph, buttons } = PAGE_DATA

  return (
    <Layout>
      <SEO title="404: Not found" />
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
    </Layout>
  )
}

export default NotFoundPage

const Container = styled.div`
  margin: 0 16px 64px;
  padding-top: 40px;

  ${mediaQueries.from.breakpoint.S`
    margin: 0 24px 64px;
  `}

  ${mediaQueries.from.breakpoint.M`
    max-width: 848px;
    width: 64%;
    margin: 0 auto 160px;
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
