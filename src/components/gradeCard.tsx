import React from 'react'
import styled from 'styled-components'

// Components
import ButtonComponent from './button'
import IconComponent from './icons/icon'

// Styles
import { green, greenDark, white } from '../styles/colors'
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'

// Types
import { IBaseCard } from '../types/entities'

interface IProps extends IBaseCard {
  review?: string
}

const GradeCard: React.FC<IProps> = ({ review, title, button, className }) => {
  return (
    <Container
      href={button.url}
      className={className}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      <Wrapper>
        <Score>{review}</Score>
        <Title>{title}</Title>
      </Wrapper>
      <Button icon color={green}>
        {button.label}
      </Button>
      <XLButton>
        <Label>{button.label}</Label>
        <Icon icon="arrow" width={24} height={24} color={green} />
      </XLButton>
    </Container>
  )
}

export default GradeCard

const Button = styled(ButtonComponent)`
  background: ${white};
  color: ${green};
  justify-content: space-between;
  width: 100%;
  max-width: 400px;

  ${mediaQueries.from.breakpoint.M`
    flex: 0 0 36%;
  `}

  ${mediaQueries.from.breakpoint.L`
    flex: 0 0 25.5%;
  `}

  ${mediaQueries.from.breakpoint.XL`
    display: none;
  `}
`

const Label = styled.span`
  max-width: 0;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  transition: max-width 0.2s ease, opacity 0.4s ease, margin-right 0.4s ease;
`

const Icon = styled(IconComponent)`
  flex: 0 0 24px;
`

const XLButton = styled.div`
  display: none;

  ${mediaQueries.from.breakpoint.XL`
    ${textStyles.highlight}
    display: inline-flex;
    align-items: center;
    margin: 0 48px;
    background-color: ${white};
    color: ${green};
    border-radius: 50%;
    padding: 16px;
    transition: border-radius 0.4s 0.4s ease, background 0.4s ease, padding 0.4s ease;
  `}
`

const Container = styled.a`
  display: block;
  margin-bottom: 24px;
  padding: 32px;
  background-color: ${green};
  border-radius: 2px;

  :hover {
    > ${Button} {
      background: ${white};
      color: ${greenDark};

      > svg {
        color: ${greenDark};
        transform: translateX(8px);
      }
    }
  }

  ${mediaQueries.from.breakpoint.M`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 48px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 0;
    flex-direction: column;
    align-items: flex-start;
    padding: 48px 0;

    :hover {
      > ${XLButton} {
        border-radius: 28px;
        padding: 16px 24px;
        transition: border-radius 0s ease;

        ${Label} {
          max-width: 7rem;
          margin-right: 8px;
          opacity: 1;
          transition: max-width 0.4s ease, opacity 0.4s 0.2s ease;
        }
      }
    }
  `}
`

const Wrapper = styled.div`
  margin-bottom: 24px;

  ${mediaQueries.from.breakpoint.M`
    margin: 0;
    flex: 0 0 50%;
  `}

  ${mediaQueries.from.breakpoint.L`
    flex-basis: 60%;
  `}

  ${mediaQueries.from.breakpoint.XL`
    width: 100%;
    padding: 0 48px;
  `}
`

const Score = styled.h1`
  ${textStyles.headingLoud}
  margin: 0;
  margin-bottom: 8px;
  color: ${white};

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 48px;
  `}
`

const Title = styled.h2`
  ${textStyles.plainNormal}
  margin: 0;
  color: ${white};
`
