import React from 'react'
import styled from 'styled-components'

// Styles
import mediaQueries from '../../styles/mediaQueries'
import { moveUp } from '../../styles/animations'

// Types
import { IBaseIcon as IIconProps } from '../../types/entities'

const Lines = ({ color, className }: IIconProps) => (
  <>
    <Desktop
      color={color}
      className={className}
      viewBox="0 0 638 408"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" strokeLinecap="round">
        <PathOne d="M204.103 406c-25.457-16.845-49.405-35.355-71.492-57.417C57.214 273.273 11.405 176.288 1 71.693" />
        <PathTwo d="M252.39 406.002c-31.381-18.958-60.68-40.85-87.279-67.419C89.714 263.273 43.905 166.288 33.5 61.693" />
        <PathThree d="M302.312 406c-37.996-20.714-73.238-45.989-104.7-77.417C122.213 253.273 76.404 156.288 66 51.693" />
        <PathFour d="M354.256 406c-45.453-21.998-87.379-50.692-124.145-87.417-75.397-75.31-121.206-172.295-131.611-276.89" />
        <PathFive d="M408.929 406c-54.021-22.64-103.645-54.792-146.318-97.417C187.214 233.273 141.405 136.288 131 31.693" />
        <PathSix d="M467.522 406c-64.157-22.33-122.953-58.014-172.41-107.417-75.398-75.31-121.207-172.295-131.612-276.89" />
        <PathSeven d="M532.636 405.996c-76.848-20.406-147.297-59.75-205.025-117.413C252.214 213.273 206.405 116.288 196 11.693" />
        <PathEight d="M612.96 406c-95.37-14.637-183.333-57.978-252.849-127.417-75.397-75.31-121.206-172.295-131.611-276.89" />
      </g>
    </Desktop>
    <Mobile
      color={color}
      className={className}
      viewBox="0 0 361 186"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fillRule="evenodd" strokeLinecap="round">
        <PathOneMobile d="M76.579 184a233.39 233.39 0 01-9.773-9.208C29.107 137.137 6.203 88.644 1 36.347" />
        <PathTwoMobile d="M98.613 184a233.054 233.054 0 01-15.557-14.208C45.357 132.137 22.453 83.644 17.25 31.347" />
        <PathThreeMobile d="M121.077 184a232.34 232.34 0 01-21.771-19.208C61.607 127.137 38.703 78.644 33.5 26.347" />
        <PathFourMobile d="M144.017 184c-10.031-7.212-19.55-15.307-28.461-24.208C77.857 122.137 54.953 73.644 49.75 21.347" />
        <PathFiveMobile d="M167.535 183.997a230.776 230.776 0 01-35.73-29.205C94.108 117.137 71.204 68.644 66 16.347" />
        <PathSixMobile d="M191.602 184c-15.655-9.468-30.273-20.95-43.546-34.208-37.699-37.655-60.603-86.148-65.806-138.445" />
        <PathSevenMobile d="M216.591 184c-18.973-10.352-36.572-23.512-52.285-39.208C126.607 107.137 103.703 58.644 98.5 6.347" />
        <PathEightMobile d="M242.528 184c-22.688-10.994-43.616-25.873-61.972-44.208-37.699-37.655-60.603-86.148-65.806-138.445" />
      </g>
    </Mobile>
  </>
)

export default Lines

const Svg = styled.svg<IIconProps>`
  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;

  ${mediaQueries.from.breakpoint.M`
    stroke-width: 1;
  `}

  ${mediaQueries.from.breakpoint.L`
    stroke-width: 2;
  `}
`

const Desktop = styled(Svg)`
  display: none;

  ${mediaQueries.from.breakpoint.L`
    display: block;
    height: 55%;
  `}
`

const Mobile = styled(Svg)`
  ${mediaQueries.from.breakpoint.L`
    display: none;
  `}
`

const PathOne = styled.path`
  ${moveUp(0, { x: 74, y: 3 })}
`

const PathTwo = styled.path`
  ${moveUp(0.1, { x: 77, y: 3 })}
`

const PathThree = styled.path`
  ${moveUp(0.2, { x: 81, y: 2 })}
`

const PathFour = styled.path`
  ${moveUp(0.3, { x: 86, y: 0 })}
`

const PathFive = styled.path`
  ${moveUp(0.4, { x: 92, y: -3.5 })}
`

const PathSix = styled.path`
  ${moveUp(0.5, { x: 97.5, y: -7 })}
`

const PathSeven = styled.path`
  ${moveUp(0.6, { x: 101, y: -7 })}
`

const PathEight = styled.path`
  ${moveUp(0.7, { x: 106, y: -9 })}
`

const PathOneMobile = styled.path`
  ${moveUp(0, { x: 66, y: 3 })}
`

const PathTwoMobile = styled.path`
  ${moveUp(0.1, { x: 69, y: 3 })}
`

const PathThreeMobile = styled.path`
  ${moveUp(0.2, { x: 72, y: 2 })}
`

const PathFourMobile = styled.path`
  ${moveUp(0.3, { x: 76, y: 0 })}
`

const PathFiveMobile = styled.path`
  ${moveUp(0.4, { x: 81, y: -3.5 })}
`

const PathSixMobile = styled.path`
  ${moveUp(0.5, { x: 86, y: -7 })}
`

const PathSevenMobile = styled.path`
  ${moveUp(0.6, { x: 89, y: -7 })}
`

const PathEightMobile = styled.path`
  ${moveUp(0.7, { x: 94, y: -9 })}
`
