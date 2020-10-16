import React from 'react'
import styled from 'styled-components'

// Components
import ContainerComponent from './container'
import ButtonComponent from './button'
import RichText from './richText'

// Styles
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import mediaQueries from '../styles/mediaQueries'
import * as textStyles from '../styles/textStyles'
import { green } from '../styles/colors'

// Types
import { IService } from '../types/entities'

interface IProps {
  services: IService[]
}

export const Service: React.FC<IService> = ({
  title,
  paragraph,
  button,
  image,
  type,
}) => (
  <Wrapper>
    <ImageContainer>
      <Image background={image} />
    </ImageContainer>
    <ContentWrapper>
      <Type>{type}</Type>
      <Title>{title}</Title>
      <Paragraph>
        <RichText content={paragraph.raw} />
      </Paragraph>
      <Button to={button.url} icon>
        {button.label}
      </Button>
    </ContentWrapper>
  </Wrapper>
)

const Services: React.FC<IProps> = ({ services }) => {
  return (
    <Container>
      {services.map(service => {
        return <Service key={`service-${service.type}`} {...service} />
      })}
    </Container>
  )
}

export default Services

const Container = styled(ContainerComponent)`
  padding: 0 44px;

  ${mediaQueries.from.breakpoint.S`
    padding: 0 24px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding: 0 20px;
  `}
`

const ImageContainer = styled.div`
  ${aspectRatio(288, 200)}
  margin: 0;
  margin-bottom: 24px;

  ${mediaQueries.from.breakpoint.M`
    ${aspectRatio(344, 512)}
    margin-bottom: 0;
    flex: 0 0;
    flex-basis: calc(50% - 16px);
  `}

  ${mediaQueries.from.breakpoint.L`
    ${aspectRatio(472, 513)}
  `}

  ${mediaQueries.from.breakpoint.XL`
  ${aspectRatio(600, 720)}
    flex-basis: calc(50% - 12px);
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
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;

  ${mediaQueries.from.breakpoint.M`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 80px;

    :nth-child(even) {
      flex-direction: row-reverse;
    }
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 160px;
  `}
`

const ContentWrapper = styled.div`
  ${mediaQueries.from.breakpoint.M`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 0;
    flex-basis: calc(50% - 16px);
  `}

  ${mediaQueries.from.breakpoint.XL`
    flex-basis: calc(50% - 116px);
  `}
`

const Type = styled.p`
  ${textStyles.highlight}
  margin: 0;
  margin-bottom: 16px;
  color: ${green};

  ${mediaQueries.from.breakpoint.L`
    margin-bottom: 24px;
  `}
`

const Title = styled.h1`
  ${textStyles.headingNormal}
  margin: 0;
  margin-bottom: 16px;

  ${mediaQueries.from.breakpoint.L`
    margin-bottom: 32px;
  `}
`

const Paragraph = styled.div`
  ${mediaQueries.from.breakpoint.S`
    margin-bottom: 32px;
  `}

  ${mediaQueries.from.breakpoint.L`
    margin-bottom: 40px;
  `}
`

const Button = styled(ButtonComponent)`
  align-self: flex-start;
`
