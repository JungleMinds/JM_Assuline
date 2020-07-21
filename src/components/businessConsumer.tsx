import React from 'react'
import styled from 'styled-components'

// Components
import ContainerComponent from './container'

// Styles
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import mediaQueries from '../styles/mediaQueries'
import * as textStyles from '../styles/textStyles'

// Types
interface IProps {
  image: string
  business: IContent
  consumer: IContent
}

interface IContent {
  title: string
  paragraph: string
}

const BusinessConsumer: React.FC<IProps> = ({ image, business, consumer }) => {
  return (
    <Container>
      <ImageContainer>
        <Image background={image} />
      </ImageContainer>
      <Wrapper>
        <Title>{business.title}</Title>
        <Paragraph>{business.paragraph}</Paragraph>
        <Title>{consumer.title}</Title>
        <Paragraph>{consumer.paragraph}</Paragraph>
      </Wrapper>
    </Container>
  )
}

export default BusinessConsumer

const Container = styled(ContainerComponent)`
  margin: 0 24px 64px;

  ${mediaQueries.from.breakpoint.M`
    margin: 0 0 80px;
  `}

  ${mediaQueries.from.breakpoint.L`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin: 0 auto 160px;
  `}
`

const ImageContainer = styled.div`
  ${aspectRatio(288, 312)}
  margin: 0;
  border-radius: 2px;

  ${mediaQueries.from.breakpoint.M`
    ${aspectRatio(720, 432)}
  `}

  ${mediaQueries.from.breakpoint.L`
    ${aspectRatio(472, 432)}
    flex: 1 0 48%;
  `}

  ${mediaQueries.from.breakpoint.XL`
    ${aspectRatio(600, 432)}
  `}
`

const Image = styled.div<{ background?: string }>`
  ${aspectRatioChild}
  border-radius: 2px;

  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-position: center center;
`

const Wrapper = styled.div`
  padding-top: 24px;

  ${mediaQueries.from.breakpoint.M`
    padding-top: 40px;
  `}

  ${mediaQueries.from.breakpoint.L`
    padding-top: 0;
    padding-left: 32px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding-left: 128px;
  `}
`

const Title = styled.h1`
  ${textStyles.headingSubtle}
  margin: 0;
  margin-bottom: 16px;
`

const Paragraph = styled.p`
  ${textStyles.plainNormal}
  margin: 0;

  :first-of-type {
    margin-bottom: 32px;
  }

  ${mediaQueries.from.breakpoint.M`
    :first-of-type {
      margin-bottom: 40px;
    }
  `}

  ${mediaQueries.from.breakpoint.XL`
    :first-of-type {
      margin-bottom: 64px;
    }
  `}
`
