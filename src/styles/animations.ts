import { css, keyframes } from 'styled-components'

// Styles
import { dark, green } from './colors'
import mediaQueries from './mediaQueries'

// Types
import { Iteration } from '../types/entities'

const underline = css`
  position: relative;

  &::before,
  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 1px;
    background: ${dark};
    transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  ${mediaQueries.to.breakpoint.M`
    &::before {
      content: none;
    }
  `}

  &::before {
    transform: scaleX(0);
    transform-origin: left;
  }

  &::after {
    transform-origin: right;
    transition-delay: 0.25s;
  }

  &:hover {
    color: ${green};

    &::before {
      background: ${green};
      transform: scaleX(1);
      transition-delay: 0.25s;
    }

    &::after {
      background: ${green};
      transform: scaleX(0);
      transition-delay: 0s;
    }
  }
`

// Navigation
const appearAnimation = keyframes`
  100% {
    opacity: 1
  }
`

const appear = css`
  opacity: 0;
  animation: ${appearAnimation} 0.5s 0.2s ease forwards;
`

// Main Content
const mainLoadAnimation = keyframes`
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const mainLoaded = css`
  opacity: 0;
  transform: translateY(-50px);
  animation: ${mainLoadAnimation} 1s 0.2s cubic-bezier(0.26, 0.23, 0, 1.38)
    forwards;
`

// CookieMessage and ToastBar
const appearFromKeyframe = keyframes`
  100% {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }
`

type AppearFrom = 'top' | 'bottom'

const appearFrom = (from: AppearFrom) => css`
  opacity: 0;
  transform: ${from === 'top' ? 'translateY(-100%)' : 'translateY(100%)'};
  animation: ${appearFromKeyframe} 0.5s 0.5s ease forwards;
`

// Logo
const jumpAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  35% {
    transform: translateY(-20px);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(0);
  }
`

const jump = (iteration: Iteration) => css`
  animation: ${jumpAnimation} 0.9s 0.4s ease ${iteration};
`

const lineExtensionAnimation = keyframes`
  35% {
    transform: translateY(-15px);
  }
  55% {
    transform: translateY(0);
  }
`

const lineExtension = (iteration: Iteration) => css`
  animation: ${lineExtensionAnimation} 0.9s 0.4s ease ${iteration};
`

const moveUpAnimation = keyframes`
  100% {
    transform: rotate(0);
  }
`

const moveUp = (
  delay: number,
  transformOrigin?: { x: number; y: number }
) => css`
  transform: rotate(-75deg);
  transform-origin: ${transformOrigin
    ? `${transformOrigin.x}% ${transformOrigin.y}%`
    : 'center'};
  animation: ${moveUpAnimation} 2s ${delay + 0.5}s cubic-bezier(0, 0, 0, 1)
    forwards;
`

export {
  underline,
  appear,
  mainLoaded,
  appearFrom,
  jump,
  lineExtension,
  moveUp,
}
