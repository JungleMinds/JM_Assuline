import React from "react"
import styled from "styled-components"

// Types
interface IIconProps {
  width?: number
  height?: number
  color?: string
  className?: string
}

const Location = ({ width, height, color, className }: IIconProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    color={color}
    className={className}
  >
    <g fillRule="evenodd">
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0h0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        strokeLinecap="round"
        strokeLinejoin="round"
        cx="12"
        cy="10"
        r="3"
      />
    </g>
  </Svg>
)

export default Location

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;
`
