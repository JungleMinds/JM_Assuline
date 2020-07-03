import React from "react"
import styled from "styled-components"

// Types
interface IIconProps {
  width?: number
  height?: number
  color?: string
  className?: string
  isHovered?: boolean
}

const ArrowRight = ({ width, height, color, isHovered }: IIconProps) => (
  <Svg viewBox="0 0 40 16" width={width} height={height} isHovered={isHovered}>
    <path
      d="M23.898 7.56l.021.046A.996.996 0 0124 8l-.006.105a1 1 0 01-.096.335l-.01.02a.99.99 0 01-.139.203l-.015.016-.06.06-.016.014-8 7a1 1 0 01-1.406-1.417l.09-.089L20.337 9H1a1 1 0 010-2h19.337l-5.995-5.247A1 1 0 0115.559.17l.1.076 8 7 .014.014c.021.019.042.039.061.06l-.076-.074a1.012 1.012 0 01.23.293l.01.02z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
)

export default ArrowRight

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  vertical-align: middle;
  margin-left: 8px;

  & path {
    ${props =>
      props.isHovered &&
      `d: path(
      "M39.898 7.56l.021.046A.996.996 0 0140 8l-.006.105a1 1 0 01-.096.335l-.01.02a.99.99 0 01-.139.203l-.015.016-.06.06-.016.014-8 7a1 1 0 01-1.406-1.417l.09-.089L36.337 9H1a1 1 0 010-2h35.337l-5.995-5.247A1 1 0 0131.559.17l.1.076 8 7 .014.014c.021.019.042.039.061.06l-.076-.074a1.012 1.012 0 01.23.293l.01.02z"
    );`}
    transition: all 0.2s ease-in-out;
  }
`
