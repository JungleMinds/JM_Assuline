import React from 'react'
import styled from 'styled-components'

// Types
import { IBaseIcon } from '../../types/entities'

interface IIconProps extends IBaseIcon {
  isOpen?: boolean
}

const Chevron = ({ width, height, color, className, isOpen }: IIconProps) => (
  <Svg
    viewBox="0 0 24 24"
    width={width}
    height={height}
    className={className}
    color={color}
    isOpen={isOpen}
  >
    <path
      d="M4 8l8 8 8-8"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Chevron

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  stroke-width: 2;
  fill: none;
  stroke: ${props => props.color};

  ${({ isOpen }) => isOpen && 'transform: rotateX(180deg);'}
  transform-origin: center;
  transition: transform 0.5s ease;
`
