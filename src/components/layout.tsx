/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState, useEffect } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

// Components
import Icon from './icons/icon'
import Navigation from './navigation'
import Footer from './footer'
import ToastBar from './toastBar'
import CookieMessage from './cookieMessage'

// Styling
import GlobalStyle from '../styles/index'
import mediaQueries from '../styles/mediaQueries'
import { mainLoaded } from '../styles/animations'

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

const COOKIE_MESSAGE_CONTENT = {
  title: 'Wij gebruiken cookies',
  message: 'Om onze website optimaal te tonen en het verkeer te analyseren.',
  buttonLabel: { long: 'Ik begrijp het', short: 'Ok' },
}

const Layout: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
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
          {loading ? (
            <Logo
              icon="logo"
              width={200.2}
              height={104}
              payoff
              iteration="infinite"
            />
          ) : (
            <Container>
              <ToastBar {...TOAST_BAR_CONTENT} />
              <Navigation />
              <Main>{children}</Main>
              <CookieMessage {...COOKIE_MESSAGE_CONTENT} />
              <Footer />
            </Container>
          )}
        </>
      )}
    />
  )
}

export default Layout

const Container = styled.div`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-direction: column;
`

const Logo = styled(Icon)`
  display: block;
  height: 104px;
  margin-left: 16px;

  ${mediaQueries.from.breakpoint.S`
    height: 128px;
    margin-left: 20px;
  `}

  ${mediaQueries.from.breakpoint.L`
    margin-left: 24px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    height: 160px;
    margin-left: 64px;
  `}

  ${mediaQueries.from.px(1920)`
    margin-left: calc((100% - 1792px) / 2);
  `}
`

const Main = styled.main`
  ${mainLoaded}
  flex-grow: 1;
  width: 100%;
`
