import React, { useState, useEffect } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

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
  rememberPeriodInWeeks: string
}

interface ILink {
  label: string
  url: string
}

const ToastBar: React.FC<IProps> = ({
  message,
  link,
  visible,
  rememberPeriodInWeeks,
}) => {
  const [isDiscarded, setIsDiscarded] = useState<boolean>(true)

  useEffect(() => {
    if (visible) {
      const currentTime = new Date().getTime()
      const discardedUntil = Number(
        localStorage.getItem('toastbar-discarded-until')
      )

      const stillDiscarded = discardedUntil && currentTime < discardedUntil

      if (!stillDiscarded && isDiscarded) {
        setIsDiscarded(false)

        if (discardedUntil) {
          localStorage.removeItem('toastbar-discarded-until')
        }
      } else if (!isDiscarded) {
        setIsDiscarded(true)
      }
    }
  }, [])

  const calculateMillisecondsFromWeeks = (howManyWeeks: string) =>
    Number(howManyWeeks) * 7 * 24 * 60 * 60 * 1000

  const handleDiscard = () => {
    setIsDiscarded(true)

    const discardedUntil =
      new Date().getTime() +
      calculateMillisecondsFromWeeks(rememberPeriodInWeeks)

    localStorage.setItem('toastbar-discarded-until', discardedUntil.toString())
  }

  return visible && !isDiscarded ? (
    <Container>
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
