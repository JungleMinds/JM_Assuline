import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// Components
import Button from './button'

// Styles
import { plainSubtle } from '../styles/textStyles'
import { lightGrey } from '../styles/colors'
import mediaQueries from '../styles/mediaQueries'
import { appear } from '../styles/animations'

// Types
interface IProps {
  title: string
  message: string
  buttonLabel: IButtonLabel
  rememberPeriodInWeeks: string
}

interface IButtonLabel {
  short: string
  long: string
}

const CookieMessage: React.FC<IProps> = ({
  title,
  message,
  buttonLabel,
  rememberPeriodInWeeks,
}) => {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const currentTime = new Date().getTime()
    const acceptedUntil = Number(localStorage.getItem('cookie-accepted-until'))

    const stillAccepted = acceptedUntil && currentTime < acceptedUntil

    if (!stillAccepted && !visible) {
      setVisible(true)

      if (acceptedUntil) {
        localStorage.removeItem('cookie-accepted-until')
      }
    } else if (visible) {
      setVisible(false)
    }
  }, [])

  const calculateMillisecondsFromWeeks = (howManyWeeks: string) =>
    Number(howManyWeeks) * 7 * 24 * 60 * 60 * 1000

  const handleClick = () => {
    setVisible(false)

    const cookieAcceptedUntil =
      new Date().getTime() +
      calculateMillisecondsFromWeeks(rememberPeriodInWeeks)

    localStorage.setItem(
      'cookie-accepted-until',
      cookieAcceptedUntil.toString()
    )
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
  ${appear('bottom')}

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
