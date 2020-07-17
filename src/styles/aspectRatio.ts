import { css } from 'styled-components'

const aspectRatio = (width: number, height: number) => css`
  position: relative;

  :before {
    display: block;
    width: 100%;
    padding-top: ${(height / width) * 100}%;
    content: '';
  }
`

export const aspectRatioChild = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default aspectRatio
