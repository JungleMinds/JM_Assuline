import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// Components
import IconComponent from './icons/icon'
import ButtonComponent from './button'

// Styles
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'
import colors, { white, yellow, yellowDark } from '../styles/colors'

// Types
import { IButton } from '../types/entities'
interface IProps {
  image: string
  title: string
  button: IButton
}

const ImageBanner: React.FC<IProps> = ({ image, title, button }) => {
  return (
    <Container>
      <ImageContainer>
        <Image background={image} />
      </ImageContainer>
      <Wrapper to={button.url}>
        <MobileTitle>{title}</MobileTitle>
        <DesktopTitle>{title}</DesktopTitle>
        <MobileButton icon>{button.label}</MobileButton>
        <DesktopButton>
          <Label>{button.label}</Label>
          <Icon icon="arrow" width={24} height={24} />
        </DesktopButton>
      </Wrapper>
    </Container>
  )
}

export default ImageBanner

const Container = styled.section`
  margin-bottom: 64px;
  width: 100%;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 80px;
  `}

  ${mediaQueries.from.breakpoint.L`
    position: relative;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 160px;
  `}

  ${mediaQueries.from.px(1920)`
    max-width: 1920px;
    margin: 0 auto 160px;
  `}
`

const ImageContainer = styled.div`
  ${aspectRatio(375, 200)}
  margin: 0;
  margin-bottom: 16px;
  z-index: -1;

  ${mediaQueries.from.breakpoint.M`
    ${aspectRatio(768, 480)}
    margin-bottom: 32px;
  `}

  ${mediaQueries.from.breakpoint.L`
    ${aspectRatio(1024, 480)}
  `}

  ${mediaQueries.from.breakpoint.L`
    ${aspectRatio(1440, 640)}
  `}

  ${mediaQueries.from.px(1920)`
  ${aspectRatio(1920, 640)}
    border-radius: 2px;
  `}
`

const Image = styled.div<{ background?: string }>`
  ${aspectRatioChild}

  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-position: center center;

  ${mediaQueries.from.breakpoint.L`
    :after {
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(
        ${colors.darkest.channels.red},
        ${colors.darkest.channels.green},
        ${colors.darkest.channels.blue},
        0.24);
      content: '';
      border-radius: 2px;
    }
  `}

  ${mediaQueries.from.px(1920)`
    border-radius: 2px;
  `}
`

const MobileTitle = styled.h1`
  ${textStyles.headingSubtle}
  margin: 0 0 16px;

  ${mediaQueries.from.breakpoint.M`
    margin-bottom: 24px;
  `}

  ${mediaQueries.from.breakpoint.L`
    display: none;
  `}
`

const DesktopTitle = styled.h1`
  ${textStyles.headingLoud}
  display: none;

  ${mediaQueries.from.breakpoint.L`
    display: block;
    color: ${white};
    margin: 0 0 40px;
  `}
`

const Label = styled.span`
  ${textStyles.highlight}
  max-width: 0;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  transition: max-width 0.2s ease, opacity 0.4s ease;
`

const Icon = styled(IconComponent)`
  flex: 0 0 24px;
`

const DesktopButton = styled.div`
  display: none;

  ${mediaQueries.from.breakpoint.L`
    display: inline-flex;
    align-items: center;
    ${textStyles.highlight}
    background-color: ${yellow};
    border-radius: 50%;
    padding: 16px;
    transition: border-radius 0.4s 0.4s ease, background 0.4s ease;
  `}
`

const Wrapper = styled(Link)`
  display: block;
  padding: 0 44px;
  pointer-events: none;

  ${mediaQueries.from.breakpoint.M`
    padding: 0 24px;
  `}

  ${mediaQueries.from.breakpoint.L`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: auto;

    &:hover {
      ${DesktopButton} {
        background: ${yellowDark};
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

  ${mediaQueries.from.px(1920)`
    border-radius: 2px;
  `}
`

const MobileButton = styled(ButtonComponent)`
  pointer-events: auto;

  ${mediaQueries.from.breakpoint.L`
    display: none;
  `}
`
