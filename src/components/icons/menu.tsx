import React from 'react'
import styled from 'styled-components'

// Types
import { IBaseIcon } from '../../types/entities'
interface IIconProps extends IBaseIcon {
  isOpen?: boolean
}

const Menu = ({ width, height, color, className, isOpen }: IIconProps) => (
  <Svg
    width={width}
    height={height}
    isOpen={isOpen}
    color={color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 24 24`}
    preserveAspectRatio="xMidYMid meet"
    fillRule="evenodd"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <Top d="M2 6 L18 6" />
    <Middle d="M2 12 L22 12" />
    <Bottom d="M2 18 L14 18" />
  </Svg>
)

export default Menu

const Top = styled.path``
const Middle = styled.path``
const Bottom = styled.path``

const Svg = styled.svg<IIconProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  fill: none;
  stroke: ${props => props.color};
  stroke-width: 2;

  ${Top} {
    ${({ isOpen }) =>
      isOpen &&
      'transform: translateX(-2px) translateY(7px) rotate(45deg) scaleX(1.4375);'}
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  ${Middle} {
    ${({ isOpen }) => isOpen && 'opacity: 0;'}
    transition: opacity 0.1s ease;
  }

  ${Bottom} {
    ${({ isOpen }) =>
      isOpen &&
      'transform: translateX(1px) translateY(-9px) rotate(-45deg) scaleX(1.916);'}
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  & path {
    transition: d 0.2s ease;
  }
`
