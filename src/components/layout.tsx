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
import ToastBar from './toastBar'

// Styling
import GlobalStyle from '../styles/index'

// Mock data
const TOAST_BAR_CONTENT = {
  message: 'Een update omtrend onze Corona maatregelen',
  link: {
    url: '/covid-19',
    label: 'Lees meer',
  },
  visible: true,
  rememberPeriodInWeeks: '1',
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
        <ToastBar {...TOAST_BAR_CONTENT} />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )}
  />
)

export default Layout
