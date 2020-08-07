import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// Utils
import { calculateMillisecondsFromWeeks } from '../util/calculations'

// Components
import ButtonComponent from './button'

// Styles
import { plainSubtle } from '../styles/textStyles'
import { lightGrey } from '../styles/colors'
import mediaQueries from '../styles/mediaQueries'
import { appearFrom } from '../styles/animations'

// Types
interface IProps {
  title: string
  message: string
  buttonLabel: IButtonLabel
}

interface IButtonLabel {
  short: string
  long: string
}

const COOKIE_PERIOD_IN_WEEKS = 1

const CookieMessage: React.FC<IProps> = ({ title, message, buttonLabel }) => {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const currentTime = new Date().getTime()

    const cookieStr = localStorage.getItem('assuline')
    const cookieObj = cookieStr && JSON.parse(cookieStr)

    const acceptedUntil = cookieObj && Number(cookieObj.cookie)

    const stillAccepted = acceptedUntil && currentTime < acceptedUntil

    if (!stillAccepted && !visible) {
      setVisible(true)

      if (acceptedUntil) {
        if (Object.keys(cookieObj).length > 1) {
          delete cookieObj.cookie
          localStorage.setItem('assuline', JSON.stringify(cookieObj))
        } else {
          localStorage.removeItem('assuline')
        }
      }
    } else if (visible) {
      setVisible(false)
    }
  }, [])

  const handleClick = () => {
    setVisible(false)

    const cookieAcceptedUntil =
      new Date().getTime() +
      calculateMillisecondsFromWeeks(COOKIE_PERIOD_IN_WEEKS)

    const cookieStr = localStorage.getItem('assuline')
    const cookieObj = (cookieStr && JSON.parse(cookieStr)) || {}
    cookieObj.cookie = cookieAcceptedUntil

    localStorage.setItem('assuline', JSON.stringify(cookieObj))
  }

  return visible ? (
    <Container>
      <Wrapper>
        <TextSection>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </TextSection>
        <Button onClick={handleClick}>
          <ShortLabel>{buttonLabel.short}</ShortLabel>
          <LongLabel>{buttonLabel.long}</LongLabel>
        </Button>
      </Wrapper>
    </Container>
  ) : null
}

export default CookieMessage

const Container = styled.aside`
  padding: 12px 16px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${lightGrey};
  z-index: 11;
  ${appearFrom('bottom')}

  ${mediaQueries.from.breakpoint.L`
    padding: 12px 24px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    padding: 8px 64px;
  `}
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1920px;
`

const TextSection = styled.div`
  margin-right: 21px;
`

const Message = styled.p`
  ${plainSubtle}
  margin: 0;
`

const Title = styled(Message)`
  font-weight: 600;
`

const Button = styled(ButtonComponent)`
  flex-shrink: 0;
`

const ShortLabel = styled.span`
  ${mediaQueries.from.breakpoint.M`
    display: none;
  `}
`

const LongLabel = styled.span`
  display: none;

  ${mediaQueries.from.breakpoint.M`
    display: inline;
  `}
`
