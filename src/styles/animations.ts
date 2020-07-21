import { css } from 'styled-components'

import { dark } from './colors'

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
    height: 2px;
    background: ${dark};
    transition: 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &::before {
    transform: scaleX(0);
    transform-origin: left;
  }

  &::after {
    transform-origin: right;
    transition-delay: 0.25s;
  }

  &:hover {
    &::before {
      transform: scaleX(1);
      transition-delay: 0.25s;
    }

    &::after {
      transform: scaleX(0);
      transition-delay: 0s;
    }
  }
`

export { underline }
