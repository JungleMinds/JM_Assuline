/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'

import { StaticQuery, graphql } from 'gatsby'

// Components
import Navigation from './navigation'
import Footer from './footer'
import CookieMessage from './cookieMessage'

// Styling
import GlobalStyle from '../styles/index'

// Mock data
const COOKIE_MESSAGE_CONTENT = {
  title: 'Wij gebruiken cookies',
  message: 'Om onze website optimaal te tonen en het verkeer te analyseren.',
  buttonLabel: { long: 'Ik begrijp het', short: 'Ok' },
}

const Layout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <GlobalStyle />
        <Navigation />
        <main>{children}</main>
        <CookieMessage {...COOKIE_MESSAGE_CONTENT} />
        <Footer />
      </>
    )}
  />
)

export default Layout
