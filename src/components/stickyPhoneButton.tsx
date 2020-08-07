import React from 'react'
import styled from 'styled-components'

// Components
import Icon from './icons/icon'

// Styles
import colors, { green, white } from '../styles/colors'
import mediaQueries from '../styles/mediaQueries'
import { appear } from '../styles/animations'

// Types
interface IProps {
  phoneNumber: string
}

const StickyPhoneButton: React.FC<IProps> = ({ phoneNumber }) => (
  <Container href={`tel:${phoneNumber}`}>
    <Icon icon="phone" color={white} />
  </Container>
)
export default StickyPhoneButton

const Container = styled.a`
  position: fixed;
  right: 16px;
  bottom: 16px;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${green};
  box-shadow: 0 4px 16px
    rgba(
      ${colors.darkest.channels.red},
      ${colors.darkest.channels.green},
      ${colors.darkest.channels.blue},
      0.16
    );
  border-radius: 50%;
  z-index: 1;
  ${appear}

  ${mediaQueries.from.breakpoint.S`
      right: 20px;
      bottom: 24px;
  `}

  ${mediaQueries.from.breakpoint.L`
      display: none;
  `}
`
