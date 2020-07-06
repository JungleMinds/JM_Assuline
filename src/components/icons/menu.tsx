import React from "react"
import styled from "styled-components"

// Styles
import { dark } from "../../styles/colors"

// Types
interface IIconProps {
  width?: number
  height?: number
  isOpen?: boolean
}

const Menu = ({ width, height, isOpen }: IIconProps) => (
  <>
    <Svg
      width={width}
      height={height}
      isOpen={isOpen}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 24 24`}
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={dark}
        strokeWidth="2"
      >
        <path className="top" d="M2 6 L18 6" />
        <path className="middle" d="M2 12 L22 12" />
        <path className="bottom" d="M2 18 L14 18" />
      </g>
    </Svg>
  </>
)

export default Menu

const Svg = styled.svg<IIconProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  .top {
    ${({ isOpen }) =>
      isOpen &&
      "transform: translateX(-2px) translateY(7px) rotate(45deg) scaleX(1.4375);"}
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  .middle {
    ${({ isOpen }) => isOpen && "opacity: 0;"}
    transition: opacity 0.1s ease;
  }

  .bottom {
    ${({ isOpen }) =>
      isOpen &&
      "transform: translateX(1px) translateY(-9px) rotate(-45deg) scaleX(1.916);"}
    transform-origin: center;
    transition: transform 0.2s ease;
  }

  & path {
    transition: d 0.2s ease;
  }
`
