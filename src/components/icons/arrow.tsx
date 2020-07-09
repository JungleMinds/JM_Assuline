import React from "react"
import styled from "styled-components"

// Types
import { IBaseIcon as IIconProps } from "../../types/entities"

const Arrow = ({ width, height, color, className }: IIconProps) => (
  <Svg
    viewBox="0 0 24 16"
    width={width}
    height={height}
    className={className}
    color={color}
  >
    <path
      d="M23.898 7.56l.021.046A.996.996 0 0124 8l-.006.105a1 1 0 01-.096.335l-.01.02a.99.99 0 01-.139.203l-.015.016-.06.06-.016.014-8 7a1 1 0 01-1.406-1.417l.09-.089L20.337 9H1a1 1 0 010-2h19.337l-5.995-5.247A1 1 0 0115.559.17l.1.076 8 7 .014.014c.021.019.042.039.061.06l-.076-.074a1.012 1.012 0 01.23.293l.01.02z"
      fillRule="evenodd"
    />
  </Svg>
)

export default Arrow

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  fill: ${props => props.color};
`
