import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Components
import ContainerComponent from './container'
import Button from './button'

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
  buttonLabel,
  buttonUrl,
  image,
  type,
}) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image background={image} />
      </ImageContainer>
      <ContentWrapper>
        <Type>{type}</Type>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
        <Link to={buttonUrl}>
          <Button icon>{buttonLabel}</Button>
        </Link>
      </ContentWrapper>
    </Wrapper>
  )
}

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
  border-radius: 2px;

  ${mediaQueries.from.breakpoint.S`
    ${aspectRatio(720, 480)}
    margin-bottom: 32px;
  `}

  ${mediaQueries.from.breakpoint.M`
    ${aspectRatio(472, 513)}
    flex: 1 0 calc(50% - 16px);
    max-width: 50%;
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

  ${mediaQueries.from.breakpoint.S`
    margin-bottom: 80px;
  `}

  ${mediaQueries.from.breakpoint.M`
    flex-direction: row;

    > ${ImageContainer} {
      margin-right: 32px;
    }

    :nth-child(even) {
      flex-direction: row-reverse;

      > ${ImageContainer} {
        margin-right: 0;
        margin-left: 32px;
      }
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
    flex: 1 0 calc(50% - 16px);
    max-width: 50%;
  `}
`

const Type = styled.p`
  ${textStyles.highlight}
  margin: 0;
  margin-bottom: 16px;
  color: ${green};
`

const Title = styled.h1`
  ${textStyles.headingNormal}
  margin: 0;
  margin-bottom: 16px;
`

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: 24px;

  ${mediaQueries.from.breakpoint.S`
    margin-bottom: 32px;
  `}
`
