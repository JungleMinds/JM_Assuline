import React, { useState, useEffect } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

// Utils
import { calculateMillisecondsFromWeeks } from '../util/calculations'

// Components
import IconComponent from './icons/icon'

// Styles
import { green, white } from '../styles/colors'
import mediaQueries from '../styles/mediaQueries'
import { appear } from '../styles/animations'

// Types
interface IProps {
  message: string
  link: ILink
  visible: boolean
}

interface ILink {
  label: string
  url: string
}

const TOASTER_PERIOD_IN_WEEKS = 1

const ToastBar: React.FC<IProps> = ({ message, link, visible }) => {
  const [isDiscarded, setIsDiscarded] = useState<boolean>(true)

  useEffect(() => {
    if (visible) {
      const currentTime = new Date().getTime()

      const cookieStr = localStorage.getItem('assuline')
      const cookieObj = cookieStr && JSON.parse(cookieStr)

      const discardedUntil = cookieObj && Number(cookieObj.toaster)

      const stillDiscarded = discardedUntil && currentTime < discardedUntil

      if (!stillDiscarded && isDiscarded) {
        setIsDiscarded(false)

        if (discardedUntil) {
          if (Object.keys(cookieObj).length > 1) {
            delete cookieObj.toaster
            localStorage.setItem('assuline', JSON.stringify(cookieObj))
          } else {
            localStorage.removeItem('assuline')
          }
        }
      } else if (!isDiscarded) {
        setIsDiscarded(true)
      }
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

  return visible && !isDiscarded ? (
    <Container id="toast-bar">
      <Wrapper>
        <ContentWrapper>
          <Message>{message}</Message>
          <Link to={link.url}>{link.label}</Link>
        </ContentWrapper>
        <Icon icon="close" onClick={handleDiscard} color={white} />
      </Wrapper>
    </Container>
  ) : null
}

export default ToastBar

const Container = styled.aside`
  background-color: ${green};
  z-index: 11;
  position: relative;
  ${appear('top')}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  color: ${white};
  max-width: 1920px;
  margin: 0 auto;

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
  display: inline;
  margin: 0;
  margin-right: 16px;
`

const Link = styled(GatsbyLink)`
  display: inline;
  color: ${white};
  text-decoration: underline;
`

const Icon = styled(IconComponent)`
  flex: 0 0 24px;
  cursor: pointer;
`
