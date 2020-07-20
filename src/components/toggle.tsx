import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

// Components
import ContainerComponent from './container'
import Accordions from './accordions'

// Styles
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import mediaQueries from '../styles/mediaQueries'
import * as textStyles from '../styles/textStyles'
import { white, yellow } from '../styles/colors'

// Types
import { IAccordionItem } from '../types/entities'

interface IBranch {
  image: string
  title: string
  text: string
  accordions: IAccordionItem[]
}

interface IProps {
  private: IBranch
  business: IBranch
}

type ToggleChoice = 'private' | 'business'

const Toggle: React.FC<IProps> = props => {
  const [choice, setChoice] = useState<ToggleChoice>('private')
  const [toggleDimensions, setToggleDimensions] = useState<{
    w: number
    h: number
    diff: number
  }>({ w: 0, h: 0, diff: 0 })

  const privateLabel = useRef<HTMLSpanElement>(null)
  const businessLabel = useRef<HTMLSpanElement>(null)

  const getToggleSize = (value: string) => {
    const dimensions: {
      w: number
      h: number
      diff: number
    } = { w: 0, h: 0, diff: 0 }

    if (value === 'private' && (privateLabel && privateLabel.current)) {
      dimensions.w = privateLabel.current.clientWidth
      dimensions.h = privateLabel.current.clientHeight
    } else if (
      value === 'business' &&
      (businessLabel && businessLabel.current) &&
      (privateLabel && privateLabel.current)
    ) {
      dimensions.diff = privateLabel.current.clientWidth
      dimensions.w = businessLabel.current.clientWidth
      dimensions.h = businessLabel.current.clientHeight
    }

    setToggleDimensions(dimensions)
  }

  const handleToggle = () => {
    const newChoice = choice === 'private' ? 'business' : 'private'
    getToggleSize(newChoice)
    setChoice(newChoice)
  }

  const handleResize = () => getToggleSize(choice)

  useEffect(() => {
    getToggleSize(choice)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return (
    <>
      <Container>
        <ImageContainer>
          <Image
            visible={choice === 'private'}
            background={props.private.image}
          />
          <Image
            visible={choice === 'business'}
            background={props.business.image}
          />
          <ToggleContainer>
            <Labels
              width={toggleDimensions.w}
              height={toggleDimensions.h}
              diff={toggleDimensions.diff}
              choice={choice}
            >
              <Label ref={privateLabel} onClick={handleToggle}>
                <Short>Particulier</Short>
                <Long>Particuliere verzekeringen</Long>
              </Label>
              <Label ref={businessLabel} onClick={handleToggle}>
                <Short>Zakelijk</Short>
                <Long>Zakelijke verzekeringen</Long>
              </Label>
            </Labels>
          </ToggleContainer>
        </ImageContainer>
        <Title>{props[choice].title}</Title>
        <Text>{props[choice].text}</Text>
      </Container>
      <Accordions data={props[choice].accordions} />
    </>
  )
}

export default Toggle

const Container = styled(ContainerComponent)`
  margin: 0 44px 24px;
  padding: 0;

  ${mediaQueries.from.breakpoint.M`
    margin: 0 24px 24px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding: 0 20px;
    margin: 0 auto 56px;
  `}
`

const ImageContainer = styled.div`
  ${aspectRatio(288, 225)}
  margin: 0;
  margin-bottom: 24px;
  border-radius: 2px;

  ${mediaQueries.from.breakpoint.M`
    ${aspectRatio(720, 424)}
  `}

  ${mediaQueries.from.breakpoint.L`
    ${aspectRatio(976, 504)}
  `}

  ${mediaQueries.from.breakpoint.XL`
    ${aspectRatio(1224, 569)}
    margin-bottom: 56px;
  `}
`

const Image = styled.div<{ background?: string; visible: boolean }>`
  ${aspectRatioChild}
  border-radius: 2px;
  transition: opacity 1s ease;
  opacity: ${props => (props.visible ? 1 : 0)};
  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-position: center center;
`

const ToggleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Labels = styled.div<{
  width: number
  height: number
  diff: number
  choice: string
}>`
  display: flex;
  flex-flow: row nowrap;
  padding: 4px;
  border-radius: 24px;
  box-sizing: border-box;
  background: ${white};
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    display: block;
    position: absolute;
    background-color: ${yellow};
    border-radius: 24px;
    transform: translateX(
      ${props => (props.choice === 'private' ? 0 : `${props.diff}px`)}
    );
    transform-origin: center;
    transition: transform 0.4s ease, width 0.4s ease;
  }
`

const Label = styled.span`
  ${textStyles.highlight}
  padding: 10px 24px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  cursor: pointer;

  ${mediaQueries.from.breakpoint.XL`
    padding: 10px 32px;
  `}
`

const Short = styled.span`
  ${mediaQueries.from.breakpoint.M`
    display: none;
  `}
`

const Long = styled.span`
  ${mediaQueries.to.breakpoint.M`
    display: none;
  `}
`

const Title = styled.h1`
  ${textStyles.headingNormal}
  margin: 0;
  margin-bottom: 16px;

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 8px;
  `}
`

const Text = styled.p`
  ${textStyles.plainLoud}
  margin: 0;
  margin-bottom: 24px;

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 56px;
  `}
`
