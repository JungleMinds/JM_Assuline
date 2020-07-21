// Global stylesheet
import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

// Styles
import * as fonts from './fonts'
import * as textStyles from './textStyles'
import { dark } from './colors'
import { underline } from './animations'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  ${fonts.faces}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    ${fonts.settings}
    ${textStyles.plainNormal}

    @media all and (-ms-high-contrast:none) {
      overflow-x: hidden;
    }
  }

  b, strong {
    font-weight: bold;
  }

  img {
    max-width: 100%;
  }

  a {
    color: ${dark};
    text-decoration: none;
  }

  p {
    a {
      ${underline}
    }
  }
`

export default GlobalStyle
