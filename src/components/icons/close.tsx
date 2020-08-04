import React from 'react'
import styled from 'styled-components'

// Types
import { IBaseIcon } from '../../types/entities'

interface IIconProps extends IBaseIcon {
  onClick?: () => void
}

const Close = ({ width, height, color, className, onClick }: IIconProps) => (
  <Svg
    width={width}
    height={height}
    className={className}
    color={color}
    viewBox="-2 -2 20 20"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <g fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.667 1.333l-13.31 13.31M1.333 1.333l13.31 13.31" />
    </g>
  </Svg>
)

export default Close

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;
`
