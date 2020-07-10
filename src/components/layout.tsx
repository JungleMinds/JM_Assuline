/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import { StaticQuery, graphql } from "gatsby"

// Components
import Navigation from "./navigation"
import Footer from "./footer"

// Styling
import GlobalStyle from "../styles/index"

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
        <Footer />
      </>
    )}
  />
)

export default Layout
