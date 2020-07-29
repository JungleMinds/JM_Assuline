import React from 'react'
import styled from 'styled-components'

// Types
import { IBaseIcon as IIconProps } from '../../types/entities'

const Download = ({ width, height, color, className }: IIconProps) => (
  <Svg
    viewBox={`-2 -2 24 24`}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    className={className}
    color={color}
    fillRule="evenodd"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <g>
      <path d="M19 13v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4M5 8l5 5 5-5M10 13V1" />
    </g>
  </Svg>
)

export default Download

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;
`
