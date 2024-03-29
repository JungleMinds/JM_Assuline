import React, { useState, useEffect, forwardRef } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

// Utils
import { calculateMillisecondsFromWeeks } from '../util/calculations'
import checkCookieValidity from '../util/checkCookieValidity'

// Components
import IconComponent from './icons/icon'

// Styles
import { green, white } from '../styles/colors'
import mediaQueries from '../styles/mediaQueries'
import { underline } from '../styles/animations'
import { plainSubtle } from '../styles/textStyles'

// Types
import { IToastBar } from '../types/entities'

interface IProps extends IToastBar {
  className?: string
}

const TOASTER_PERIOD_IN_WEEKS = 1

const ToastBar = forwardRef<HTMLElement, IProps>(
  ({ message, link, className }, ref) => {
    const [isDiscarded, setIsDiscarded] = useState<boolean>(true)

    useEffect(() => {
      const stillDiscarded = checkCookieValidity('toaster')

      if (!stillDiscarded && isDiscarded) {
        setIsDiscarded(false)
      } else if (!isDiscarded) {
        setIsDiscarded(true)
      }
    }, [])

    const handleDiscard = () => {
      setIsDiscarded(true)

      const discardedUntil =
        new Date().getTime() +
        calculateMillisecondsFromWeeks(TOASTER_PERIOD_IN_WEEKS)

      const cookieStr = localStorage.getItem('assuline')
      const cookieObj = (cookieStr && JSON.parse(cookieStr)) || {}
      cookieObj.toaster = discardedUntil

      localStorage.setItem('assuline', JSON.stringify(cookieObj))
    }

    return !isDiscarded ? (
      <Container ref={ref} className={className}>
        <Wrapper>
          <ContentWrapper>
            <Message>{message}</Message>
            <Link to={link.url}>
              <Span>{link.label}</Span>
            </Link>
          </ContentWrapper>
          <Icon icon="close" onClick={handleDiscard} color={white} />
        </Wrapper>
      </Container>
    ) : null
  }
)

export default ToastBar

const Container = styled.aside`
  background-color: ${green};
  z-index: 11;
  position: relative;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  color: ${white};
  max-width: 1920px;
  margin: 0 auto;

  ${mediaQueries.from.breakpoint.M`
    align-items: center;
  `}

  ${mediaQueries.from.breakpoint.L`
    padding: 8px 24px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding-left: 64px;
  `}
`

const ContentWrapper = styled.div`
  display: inline-block;
  margin-right: 16px;
`

const Message = styled.p`
  ${plainSubtle}
  display: inline;
  margin: 0;
  margin-right: 16px;

  ${mediaQueries.from.breakpoint.L`
    margin-right: 32px;
  `}
`

const Link = styled(GatsbyLink)`
  ${underline}
  display: inline;
  color: ${white};

  :before,
  :after {
    background: ${white};
  }

  :hover {
    color: ${white};

    :before,
    :after {
      background: ${white};
    }
  }
`

const Span = styled.span`
  ${plainSubtle}
`

const Icon = styled(IconComponent)`
  flex: 0 0 24px;
  cursor: pointer;
`
