import React from "react"
import styled from "styled-components"

// Types
interface IIconProps {
  width?: number
  height?: number
  color?: string
  className?: string
}

const Phone = ({ width, height, color, className }: IIconProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    className={className}
    color={color}
  >
    <path
      d="M21.888 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 013.998 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Phone

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;
`
