import { css } from 'styled-components'
import { families as font } from './fonts'
import mediaQueries from './mediaQueries'

// Text styles
// Headings

export const headingLoud = css`
  font-family: ${font.circular};
  font-size: 32px;
  line-height: 1.25;
  font-weight: bold;
  overflow-wrap: break-word;
  hyphens: auto;

  ${mediaQueries.from.px(375)`
    font-size: 40px;
    line-height: 1.2;
  `}

  ${mediaQueries.from.breakpoint.M`
    font-size: 72px;
    line-height: 1;
    letter-spacing: -1px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    font-size: 88px;
  `}
`
export const headingBig = css`
  font-family: ${font.circular};
  font-size: 32px;
  line-height: 1.25;
  font-weight: bold;
  overflow-wrap: break-word;
  hyphens: auto;

  ${mediaQueries.from.px(375)`
    font-size: 40px;
    line-height: 1.2;
  `}

  ${mediaQueries.from.breakpoint.M`
    font-size: 56px;
    line-height: 1.142;
  `}

  ${mediaQueries.from.breakpoint.XL`
    font-size: 72px;
    line-height: 1;
    letter-spacing: -1px;
  `}
`
export const headingNormal = css`
  font-family: ${font.circular};
  font-size: 24px;
  line-height: 1.333;
  font-weight: bold;
  overflow-wrap: break-word;
  hyphens: auto;

  ${mediaQueries.from.px(375)`
    font-size: 32px;
    line-height: 1.25;
  `}

  ${mediaQueries.from.breakpoint.M`
    font-size: 40px;
    line-height: 1.2;
  `}

  ${mediaQueries.from.breakpoint.XL`
    font-size: 56px;
    line-height: 1.142;
  `}
`
export const headingSubtle = css`
  font-family: ${font.circular};
  font-size: 20px;
  line-height: 1.2;
  font-weight: bold;
  overflow-wrap: break-word;
  hyphens: auto;

  ${mediaQueries.from.px(375)`
    font-size: 24px;
    line-height: 1.333;
  `}

  ${mediaQueries.from.breakpoint.M`
    font-size: 32px;
    line-height: 1.25;
  `}
`

// Highlight

export const highlight = css`
  font-family: ${font.circular};
  font-size: 14px;
  line-height: 1.285;
  font-weight: bold;
  overflow-wrap: break-word;
  hyphens: auto;

  ${mediaQueries.from.px(375)`
    font-size: 16px;
    line-height: 1.25;
  `}

  ${mediaQueries.from.breakpoint.XL`
    font-size: 20px;
    line-height: 1.2;
  `}
`
export const highlightSubtle = css`
  font-family: ${font.circular};
  font-size: 14px;
  line-height: 1.285;
  font-weight: bold;
  overflow-wrap: break-word;
  hyphens: auto;

  ${mediaQueries.from.breakpoint.XL`
    font-size: 16px;
    line-height: 1.25;
  `}
`

// Plain

export const plainLoud = css`
  font-family: ${font.poppins};
  font-size: 16px;
  line-height: 1.75;
  font-weight: normal;
  overflow-wrap: break-word;
  hyphens: auto;

  ${mediaQueries.from.breakpoint.M`
    font-size: 20px;
    line-height: 1.6;
  `}

  ${mediaQueries.from.breakpoint.XL`
    font-size: 24px;
    line-height: 1.667;
  `}
`
export const plainNormal = css`
  font-family: ${font.poppins};
  font-size: 16px;
  line-height: 1.75;
  font-weight: normal;
  overflow-wrap: break-word;
  hyphens: auto;

  ${mediaQueries.from.breakpoint.M`
    font-size: 18px;
    line-height: 1.667;
  `}

  ${mediaQueries.from.breakpoint.XL`
    font-size: 20px;
    line-height: 1.6;
  `}
`
export const plainSubtle = css`
  font-family: ${font.poppins};
  font-size: 14px;
  line-height: 1.714;
  font-weight: normal;
  overflow-wrap: break-word;
  hyphens: auto;

  ${mediaQueries.from.breakpoint.XL`
    font-size: 16px;
    line-height: 1.75;
  `}
`
