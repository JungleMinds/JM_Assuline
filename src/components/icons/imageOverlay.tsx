import React from 'react'
import styled from 'styled-components'

// Types
interface IIconProps {
  width?: number
  height?: number
  color?: string
  className?: string
}

const ImageOverlay = ({ width, height, color, className }: IIconProps) => (
  <Svg
    width={width}
    height={height}
    className={className}
    color={color}
    viewBox="0 0 1240 26"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0h595.059l23.128 23.128c.63.63.925.794 1.278.9.354.108.716.108 1.07 0 .353-.106.648-.27 1.278-.9L644.94 0H1240v26H0V0z"
      fillRule="evenodd"
    />
  </Svg>
)

export default ImageOverlay

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  fill: ${props => props.color};
`
