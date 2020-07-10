import React from "react"
import styled from "styled-components"

// Types
interface IIconProps {
  width?: number
  height?: number
  color?: string
  className?: string
}

const Check = ({ width, height, color, className }: IIconProps) => (
  <Svg
    width={width}
    height={height}
    className={className}
    color={color}
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10.08V11a10 10 0 11-5.93-9.14" />
      <path d="M21 3L11 13.01l-3-3" />
    </g>
  </Svg>
)

export default Check

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;
`
