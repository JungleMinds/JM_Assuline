import React from "react"
import styled from "styled-components"

// Components
import ArrowRight from "./arrowRight"

// Styles
import { yellow, yellowDark, dark, darkest } from "../styles/colors"
import * as textStyles from "../styles/textStyles"

// Types
interface IProps {
  icon?: boolean
}

const Button: React.FC<IProps> = ({ children, icon = false }) => {
  return (
    <ButtonStyled icon={icon}>
      <span>{children}</span>
      {icon && <ArrowRight width={24} height={16} color={dark} />}
    </ButtonStyled>
  )
}

export default Button

const ButtonStyled = styled.button<IProps>`
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

  & svg {
    transition: transform 0.2s ease-in-out;
  }

  :hover {
    background: ${yellowDark};
    color: ${darkest};

    & svg {
      transform: translateX(16px);
    }
  }
`
