import React from 'react'
import styled from 'styled-components'

// Types
import { IBaseIcon as IIconProps } from '../../types/entities'

const User = ({ width, height, color, className }: IIconProps) => (
  <Svg
    viewBox="-1.5 -2 22 22"
    width={width}
    height={height}
    className={className}
    color={color}
  >
    <g
      transform="translate(-3 -2)"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </g>
  </Svg>
)

export default User

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;
`
