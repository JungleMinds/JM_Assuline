/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import styled from 'styled-components'

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
        <Container>
          <Navigation />
          <Main>{children}</Main>
          <CookieMessage {...COOKIE_MESSAGE_CONTENT} />
          <Footer />
        </Container>
      </>
    )}
  />
)

export default Layout

const Container = styled.div`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex-grow: 1;
  width: 100%;
`
