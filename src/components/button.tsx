import React from "react"
import styled from "styled-components"

// Components
import Icon from "./icons/icon"

// Styles
import { yellow, yellowDark, dark, darkest } from "../styles/colors"
import * as textStyles from "../styles/textStyles"

// Types
interface IProps {
  icon?: boolean
}

const Button: React.FC<IProps> = ({ children, icon }) => {
  return (
    <Container>
      <span>{children}</span>
      {icon && <Icon icon="arrow" width={24} height={16} color={dark} />}
    </Container>
  )
}

export default Button

const Container = styled.button`
  display: inline-flex;
  align-items: center;
  background: ${yellow};
  padding: 12px 32px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  color: ${dark};
  ${textStyles.highlight}
  transition: background 0.2s ease-in-out;

  > svg {
    transition: transform 0.2s ease-in-out;
  }

  :hover {
    background: ${yellowDark};
    color: ${darkest};

    > svg {
      transform: translateX(16px);
    }
  }
`
