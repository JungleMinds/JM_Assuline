import React from 'react'
import styled from 'styled-components'

// Types
import { IBaseIcon as IIconProps } from '../../types/entities'

const ErrorIcon = ({ width, height, color, className }: IIconProps) => (
  <Svg
    width={width}
    height={height}
    className={className}
    color={color}
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      transform="translate(-1 -1)"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </g>
  </Svg>
)

export default ErrorIcon

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;
`
