import React from "react"
import styled from "styled-components"

// Types
import { IBaseIcon as IIconProps } from "../../types/entities"

const External = ({ width, height, color, className }: IIconProps) => (
  <Svg
    viewBox={`0 0 24 24`}
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
    <path d="M17.333 12.889v5.333c0 .982-.796 1.778-1.777 1.778H5.778A1.778 1.778 0 014 18.222V8.444c0-.981.796-1.777 1.778-1.777h5.333M14.667 4H20v5.333M10.222 13.778L20 4" />
  </Svg>
)

export default External

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;
`
