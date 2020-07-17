import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Components
import SEO from '../components/seo'
import Layout from '../components/layout'
import Container from '../components/container'

// Styles
import * as textStyles from '../styles/textStyles'
import colors from '../styles/colors'

const StyleGuidePage = () => (
  <Layout>
    <SEO title="Styleguide page" />
    <Container>
      <Link to="/">Go back to the homepage</Link>

      <Colors>
        {Object.keys(colors).map((item: string) => (
          <Color background={item} key={`color-${item}`}>
            <span>{item}</span>
          </Color>
        ))}
      </Colors>

      <HeadingLoud>Heading Loud</HeadingLoud>
      <HeadingBig>Heading Big</HeadingBig>
      <HeadingNormal>Heading Normal</HeadingNormal>
      <HeadingSubtle>Heading Subtle</HeadingSubtle>
      <Highlight>Highlight</Highlight>
      <br />
      <HighlightSubtle>HighlightSubtle</HighlightSubtle>
      <PlainLoud>PlainLoud</PlainLoud>
      <PlainNormal>PlainNormal</PlainNormal>
      <PlainSubtle>PlainSubtle</PlainSubtle>
    </Container>
  </Layout>
)

export default StyleGuidePage

const HeadingLoud = styled.h1`
  ${textStyles.headingLoud}
`
const HeadingBig = styled.h2`
  ${textStyles.headingBig}
`
const HeadingNormal = styled.h3`
  ${textStyles.headingNormal}
`
const HeadingSubtle = styled.h4`
  ${textStyles.headingSubtle}
`

const Highlight = styled.span`
  ${textStyles.highlight}
`
const HighlightSubtle = styled.span`
  ${textStyles.highlightSubtle}
`

const PlainLoud = styled.p`
  ${textStyles.plainLoud}
`
const PlainNormal = styled.p`
  ${textStyles.plainNormal}
`
const PlainSubtle = styled.p`
  ${textStyles.plainSubtle}
`

const Colors = styled.div`
  display: flex;
  flex-flow: row wrap;
`
const Color = styled.div<{ background: string }>`
  display: flex;
  flex: 1 0 calc(25% - (30px / 4));
  height: 100px;
  justify-content: center;
  align-items: center;

  margin-left: 10px;
  margin-bottom: 10px;

  &:nth-child(4n + 1) {
    margin-left: 0;
  }

  background-color: ${props => colors[props.background].rgb};
  color: ${props =>
    props.background === 'dark' || props.background === 'darkest'
      ? colors.white.rgb
      : colors.dark.rgb};
`
