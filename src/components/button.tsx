import React from 'react'
import styled from 'styled-components'

// Components
import IconComponent from './icons/icon'

// Styles
import { yellow, yellowDark, dark, darkest } from '../styles/colors'
import * as textStyles from '../styles/textStyles'
import mediaQueries from '../styles/mediaQueries'

// Types
interface IProps {
  icon?: boolean
  className?: string
}

const Button: React.FC<IProps> = ({ children, icon, className }) => {
  return (
    <Container className={className}>
      <Label>{children}</Label>
      {icon && <Icon icon="arrow" width={24} height={16} color={dark} />}
    </Container>
  )
}

export default Button

const Icon = styled(IconComponent)`
  margin-left: 8px;
  transition: transform 0.2s ease-in-out;
`

const Container = styled.button`
  display: inline-flex;
  align-items: center;
  background: ${yellow};
  padding: 12px 24px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  color: ${dark};
  ${textStyles.highlight}
  transition: background 0.2s ease-in-out;

  :hover {
    background: ${yellowDark};
    color: ${darkest};

    > ${Icon} {
      transform: translateX(8px);
    }
  }

  ${mediaQueries.from.breakpoint.XL`
    padding: 12px 32px;

    :hover {
      > ${Icon} {
        transform: translateX(16px);
      }
    }
  `}
`

const Label = styled.span``
