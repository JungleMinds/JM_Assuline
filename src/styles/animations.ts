import { css } from 'styled-components'

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
    bottom: -0.1rem;
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

export { underline }
