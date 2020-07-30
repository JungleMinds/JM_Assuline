import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Components
import ButtonComponent from './button'

// Styles
import { lightGrey, yellowDark, darkest } from '../styles/colors'
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'

// Types
import { IBaseCard } from '../types/entities'

interface IProps extends IBaseCard {
  image: string
  expandableButton?: boolean
}

const Card: React.FC<IProps> = ({
  image,
  title,
  button,
  className,
  expandableButton,
}) => {
  return (
    <Container to={button.url} className={className}>
      <ImageContainer>
        <Image background={image} />
      </ImageContainer>
      <Wrapper>
        <Title>{title}</Title>
        <Button icon isExpandable={expandableButton}>
          {button.label}
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Card

const Wrapper = styled.div`
  padding: 0 32px;
  flex-grow: 1;

  ${mediaQueries.from.breakpoint.M`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 40px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding: 0 48px;
  `}
`

const Button = styled(ButtonComponent)<{ isExpandable?: boolean }>`
  justify-content: space-between;
  width: 100%;
  max-width: 400px;

  ${mediaQueries.from.breakpoint.XL`
    ${(props: { isExpandable: boolean }) =>
      !props.isExpandable && 'width: auto;'}
  `}
`

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding-bottom: 32px;
  background-color: ${lightGrey};
  border-radius: 2px;

  :hover {
    > ${Wrapper} > ${Button} {
      background: ${yellowDark};
      color: ${darkest};

      > svg {
        transform: translateX(8px);
      }
    }
  }

  ${mediaQueries.from.breakpoint.M`
    padding-bottom: 48px;
  `}

  ${mediaQueries.from.breakpoint.L`
    padding-bottom: 40px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding-bottom: 48px;
    margin-bottom: 0;
  `}
`

const ImageContainer = styled.div`
  ${aspectRatio(288, 168)}
  margin-bottom: 24px;

  ${mediaQueries.from.breakpoint.M`
    ${aspectRatio(348, 232)}
    margin-bottom: 40px;
  `}

  ${mediaQueries.from.breakpoint.L`
    ${aspectRatio(472, 280)}
  `}

  ${mediaQueries.from.breakpoint.XL`
    ${aspectRatio(392, 232)}
    margin-bottom: 48px;
  `}
`

const Image = styled.div<{ background: string }>`
  ${aspectRatioChild}
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;

  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-position: center center;
`

const Title = styled.h2`
  ${textStyles.headingSubtle}
  margin: 0;
  margin-bottom: 24px;
  width: 100%;
`
