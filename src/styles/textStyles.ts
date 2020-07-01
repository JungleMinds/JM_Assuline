import { css } from "styled-components"
import { families as font } from "./fonts"
import mediaQueries from "./mediaQueries"

// Text styles
// Headings

export const headingLoud = css`
  font-family: ${font.circular};
  font-size: 40px;
  line-height: 1.2;
  font-weight: bold;

  ${mediaQueries.from.breakpoint.M`
    font-size: 72px;
    line-height: 1;
    letter-spacing: -1;
  `}

  ${mediaQueries.from.breakpoint.L`
    font-size: 88px;
  `}
`
export const headingBig = css`
  font-family: ${font.circular};
  font-size: 40px;
  line-height: 1.2;
  font-weight: bold;

  ${mediaQueries.from.breakpoint.M`
    font-size: 56px;
    line-height: 1.142;
  `}

  ${mediaQueries.from.breakpoint.L`
    font-size: 72px;
    line-height: 1;
    letter-spacing: -1;
  `}
`
export const headingNormal = css`
  font-family: ${font.circular};
  font-size: 32px;
  line-height: 1.25;
  font-weight: bold;

  ${mediaQueries.from.breakpoint.M`
    font-size: 40px;
    line-height: 1.2;
  `}

  ${mediaQueries.from.breakpoint.L`
    font-size: 56px;
    line-height: 1.142;
  `}
`
export const headingSubtle = css`
  font-family: ${font.circular};
  font-size: 24px;
  line-height: 1.333;
  font-weight: bold;

  ${mediaQueries.from.breakpoint.M`
    font-size: 32px;
    line-height: 1.25;
  `}
`

// Highlight

export const highlight = css`
  font-family: ${font.circular};
  font-size: 16px;
  line-height: 1.25;
  font-weight: bold;

  ${mediaQueries.from.breakpoint.L`
    font-size: 20px;
    line-height: 1.2;
  `}
`
export const highlightSubtle = css`
  font-family: ${font.circular};
  font-size: 14px;
  line-height: 1.285;
  font-weight: bold;

  ${mediaQueries.from.breakpoint.L`
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

  ${mediaQueries.from.breakpoint.M`
    font-size: 20px;
    line-height: 1.6;
  `}

  ${mediaQueries.from.breakpoint.L`
    font-size: 24px;
    line-height: 1.667;
  `}
`
export const plainNormal = css`
  font-family: ${font.poppins};
  font-size: 16px;
  line-height: 1.75;
  font-weight: normal;

  ${mediaQueries.from.breakpoint.M`
    font-size: 18px;
    line-height: 1.667;
  `}

  ${mediaQueries.from.breakpoint.L`
    font-size: 20px;
    line-height: 1.6;
  `}
`
export const plainSubtle = css`
  font-family: ${font.poppins};
  font-size: 14px;
  line-height: 1.714;
  font-weight: normal;

  ${mediaQueries.from.breakpoint.L`
    font-size: 16px;
    line-height: 1.75;
  `}
`