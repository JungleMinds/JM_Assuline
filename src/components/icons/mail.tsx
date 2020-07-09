import React from "react"
import styled from "styled-components"

// Types
interface IIconProps {
  width?: number
  height?: number
  color?: string
  className?: string
}

const Mail = ({ width, height, color, className }: IIconProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    color={color}
    className={className}
  >
    >
    <g fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </g>
  </Svg>
)

export default Mail

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;
`
