import React from 'react'
import styled from 'styled-components'

// Components
import Icon from './icons/icon'

// Styles
import mediaQueries from '../styles/mediaQueries'
import { appear } from '../styles/animations'

// Types
interface IProps {
  isOpen?: boolean
  handleClick?: () => void
}

const Hamburger: React.FC<IProps> = ({ isOpen, handleClick }) => {
  return (
    <Button onClick={handleClick}>
      <Icon icon="menu" width={24} height={24} isOpen={isOpen} />
    </Button>
  )
}

export default Hamburger

const Button = styled.button<IProps>`
  background: transparent;
  border-radius: 50%;
  border: 0;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 16px;
  right: 16px;
  cursor: pointer;
  ${appear}

  :focus {
    outline: none;
  }

  ${mediaQueries.from.breakpoint.S`
    top: 24px;
    right: 20px;
  `}

  ${mediaQueries.from.breakpoint.L`
    display: none;
  `}
`
