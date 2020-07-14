import React from 'react'
import styled from 'styled-components'

// Types
import { IBaseIcon as IIconProps } from '../../types/entities'

const Indicator = ({ width, height, color, className }: IIconProps) => (
  <Svg
    viewBox="0 0 24 2"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    color={color}
    className={className}
  >
    <rect fillRule="evenodd" width="24" height="2" rx="1" />
  </Svg>
)

export default Indicator

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  fill: ${props => props.color};
`
