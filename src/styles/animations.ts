import { css, keyframes } from 'styled-components'

// Styles
import { dark, green } from './colors'
import mediaQueries from './mediaQueries'

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

const appearKeyframe = keyframes`
  100% {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }
`

type Appear = 'top' | 'bottom'

const appear = (from: Appear) => css`
  opacity: 0;
  max-height: 0;
  transform: ${from === 'top' ? 'translateY(-100%)' : 'translateY(100%)'};
  animation: ${appearKeyframe} 0.5s 0.5s ease forwards;
`

export { underline, appear }
