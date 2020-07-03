import React, { useState } from "react"
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
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(prevState => !prevState)
  }

  return (
    <ButtonStyled
      icon={icon}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {children}
      {icon && (
        <ArrowRight width={40} height={24} color={dark} isHovered={isHovered} />
      )}
    </ButtonStyled>
  )
}

export default Button

const ButtonStyled = styled.button<IProps>`
  display: block;
  background: ${yellow};
  padding: ${props => (props.icon ? "12px 16px 12px 32px" : "12px 32px 12px")};
  border-radius: 24px;
  border: none;
  cursor: pointer;
  color: ${dark};
  ${textStyles.highlight}
  transition: all 0.2s ease-in-out;

  :focus {
    outline: none;
  }

  :hover {
    background: ${yellowDark};
    color: ${darkest};
  }
`
