import React from 'react'
import styled from 'styled-components'

// Types
import { IBaseIcon as IIconProps } from '../../types/entities'

const Pictogram = ({ color, className }: IIconProps) => (
  <Svg
    className={className}
    color={color}
    viewBox="0 0 297 328"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <g transform="translate(90 225)">
        <path d="M8 38h96v64H64.031L64 78H48l.062 24H8z" />
        <path d="M20 74h16v16H20zM76 74h16v16H76zM20 50h16v16H20z" />
        <rect x="48" y="50" width="16" height="16" rx="8" />
        <path d="M76 50h16v16H76zM16 0h80l16 32H0zM128 102V62M128 84l9-8M128 74l9-8M128 84l-9-8M128 74l-9-8M104 102h32M0 32h112v6H0z" />
      </g>
      <g>
        <path d="M100 23h32v104h-32zM132 9h32v118h-12v-20.085h-8L143.937 127H132zM164 23h32v104h-32zM96 15h36v8H96zM164 15h36v8h-36zM128 1h40v8h-40zM96 127h36v8H96zM164 127h36v8h-36z" />
        <path d="M108 55h16v8h-16zM172 55h16v8h-16zM108 39h16v8h-16zM172 39h16v8h-16zM108 23h16v8h-16zM172 23h16v8h-16zM108 71h16v8h-16zM172 71h16v8h-16zM108 87h16v8h-16zM140 9h16v16h-16zM140 33h16v16h-16zM140 57h16v16h-16zM140 81h16v16h-16zM172 87h16v8h-16zM108 103h16v8h-16zM172 103h16v8h-16zM108 119h16v8h-16zM172 119h16v8h-16z" />
      </g>
      <path d="M296 172H1" />
    </g>
  </Svg>
)

export default Pictogram

const Svg = styled.svg<IIconProps>`
  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;
`
