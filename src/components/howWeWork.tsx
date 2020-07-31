import React from 'react'
import styled from 'styled-components'

// Components
import ContainerComponent from './container'
import IllustrationComponent from './illustrations/illustration'
import Button from './button'

// Styles
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'
import aspectRatio from '../styles/aspectRatio'

// Types
import { IButton, IllustrationTypes } from '../types/entities'
interface IProps {
  data: {
    heading: string
    steps: IStep[]
    button: IButton
  }
}

interface IStep {
  illustration: IllustrationTypes
  title: string
  paragraph: string
}

const HowWeWork: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <Heading>{data.heading}</Heading>
      <Steps>
        {data.steps.map(step => (
          <Step key={`step-item-${step.title}`}>
            <IllustratorWrapper>
              <Illustration illustration={step.illustration} />
            </IllustratorWrapper>
            <Title>{step.title}</Title>
            <Paragraph>{step.paragraph}</Paragraph>
          </Step>
        ))}
      </Steps>
      <Button to={data.button.url} icon>
        {data.button.label}
      </Button>
    </Container>
  )
}

export default HowWeWork

const Container = styled(ContainerComponent)`
  margin: 0 24px 64px;

  ${mediaQueries.from.breakpoint.M`
    margin: 0 0 80px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding: 0 20px;
    margin: 0 auto 160px;
  `}
`

const Heading = styled.h1`
  ${textStyles.headingNormal}
  margin: 0 0 24px;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 40px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 56px;
  `}
`

const Steps = styled.div`
  ${mediaQueries.from.breakpoint.M`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  `}
`

const Step = styled.div`
  margin-bottom: 24px;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 40px;
    width: calc(50% - 12px);
  `}

  ${mediaQueries.from.breakpoint.L`
    width: calc(33% - 18px);
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 56px;
    padding-right: 72px;
    width: calc(33% - 12px);
  `}
`

const IllustratorWrapper = styled.div`
  ${aspectRatio(348, 235)}
  margin-bottom: 24px;
`

const Illustration = styled(IllustrationComponent)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const Title = styled.h2`
  ${textStyles.headingSubtle}
  margin: 0 0 16px;
`

const Paragraph = styled.p`
  ${textStyles.plainSubtle}
  margin: 0;
`
