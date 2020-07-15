import React from "react"
import styled from "styled-components"

// Styles
import mediaQueries from "../../styles/mediaQueries"

// Types
interface IIconProps {
  width?: number
  height?: number
  color?: string
  className?: string
  large?: boolean
}

const Lines = ({ color, className, large }: IIconProps) => (
  <Svg
    color={color}
    className={className}
    viewBox={`0 0 ${large ? "720 720" : "375 248"}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fillRule="evenodd" strokeLinecap="round">
      {large ? (
        <>
          <path d="M992.066 150v185.724h-.11c.007.993.036 1.983.036 2.975 0 121.97-47.55 236.64-133.891 322.884-86.342 86.245-201.139 133.744-323.246 133.744-122.105 0-236.902-47.499-323.244-133.744C136.214 586.273 90.405 489.288 80 384.693" />
          <path d="M1024.566 140v185.724h-.11c.007.993.036 1.983.036 2.975 0 121.97-47.55 236.64-133.891 322.884-86.342 86.245-201.139 133.744-323.246 133.744-122.105 0-236.902-47.499-323.244-133.744-75.397-75.31-121.206-172.295-131.611-276.89" />
          <path d="M1057.066 130v185.724h-.11c.007.993.036 1.983.036 2.975 0 121.97-47.55 236.64-133.891 322.884-86.342 86.245-201.139 133.744-323.246 133.744-122.105 0-236.902-47.499-323.244-133.744-75.397-75.31-121.206-172.295-131.611-276.89" />
          <path d="M1089.566 120v185.724h-.11c.006.993.036 1.983.036 2.975 0 121.97-47.55 236.64-133.891 322.884-86.342 86.245-201.139 133.744-323.246 133.744-122.105 0-236.902-47.499-323.244-133.744-75.397-75.31-121.206-172.295-131.611-276.89" />
          <path d="M1122.066 110v185.724h-.11c.007.993.036 1.983.036 2.975 0 121.97-47.55 236.64-133.891 322.884-86.342 86.245-201.139 133.744-323.246 133.744-122.105 0-236.902-47.499-323.244-133.744-75.397-75.31-121.206-172.295-131.611-276.89" />
          <path d="M1154.566 100v185.724h-.11c.007.993.036 1.983.036 2.975 0 121.97-47.55 236.64-133.891 322.884-86.342 86.245-201.139 133.744-323.246 133.744-122.105 0-236.902-47.499-323.244-133.744-75.397-75.31-121.206-172.295-131.611-276.89" />
          <path d="M1187.066 90v185.724h-.11c.007.993.036 1.983.036 2.975 0 121.97-47.55 236.64-133.891 322.884-86.342 86.245-201.139 133.744-323.246 133.744-122.105 0-236.902-47.499-323.244-133.744-75.397-75.31-121.206-172.295-131.611-276.89" />
          <path d="M1219.566 80v185.724h-.11c.007.993.036 1.983.036 2.975 0 121.97-47.55 236.64-133.891 322.884-86.342 86.245-201.139 133.744-323.246 133.744-122.105 0-236.902-47.499-323.244-133.744-75.397-75.31-121.206-172.295-131.611-276.89" />
        </>
      ) : (
        <>
          <path d="M472.033-17v92.862h-.055c.003.497.018.991.018 1.488 0 60.984-23.775 118.32-66.946 161.442-43.17 43.122-100.569 66.871-161.622 66.871-61.053 0-118.452-23.749-161.622-66.871C44.107 201.137 21.203 152.644 16 100.347" />
          <path d="M488.283-22v92.862h-.055c.003.497.018.991.018 1.488 0 60.984-23.775 118.32-66.946 161.442-43.17 43.122-100.569 66.871-161.622 66.871-61.053 0-118.452-23.749-161.622-66.871-37.699-37.655-60.603-86.148-65.806-138.445" />
          <path d="M504.533-27v92.862h-.055c.003.497.018.991.018 1.488 0 60.984-23.775 118.32-66.946 161.442-43.17 43.122-100.569 66.871-161.622 66.871-61.053 0-118.452-23.749-161.622-66.871C76.607 191.137 53.703 142.644 48.5 90.347" />
          <path d="M520.783-32v92.862h-.055c.003.497.018.991.018 1.488 0 60.984-23.775 118.32-66.946 161.442-43.17 43.122-100.569 66.871-161.622 66.871-61.053 0-118.452-23.749-161.622-66.871-37.699-37.655-60.603-86.148-65.806-138.445" />
          <path d="M537.033-37v92.862h-.055c.003.497.018.991.018 1.488 0 60.984-23.775 118.32-66.946 161.442-43.17 43.122-100.569 66.871-161.622 66.871-61.053 0-118.452-23.749-161.622-66.871C109.107 181.137 86.203 132.644 81 80.347" />
          <path d="M553.283-42v92.862h-.055c.003.497.018.991.018 1.488 0 60.984-23.775 118.32-66.946 161.442-43.17 43.122-100.569 66.871-161.622 66.871-61.053 0-118.452-23.749-161.622-66.871-37.699-37.655-60.603-86.148-65.806-138.445" />
          <path d="M569.533-47v92.862h-.055c.003.497.018.991.018 1.488 0 60.984-23.775 118.32-66.946 161.442-43.17 43.122-100.569 66.871-161.622 66.871-61.053 0-118.452-23.749-161.622-66.871-37.699-37.655-60.603-86.148-65.806-138.445" />
          <path d="M585.783-52v92.862h-.055c.003.497.018.991.018 1.488 0 60.984-23.775 118.32-66.946 161.442-43.17 43.122-100.569 66.871-161.622 66.871-61.053 0-118.452-23.749-161.622-66.871-37.699-37.655-60.603-86.148-65.806-138.445" />
        </>
      )}
    </g>
  </Svg>
)

export default Lines

const Svg = styled.svg<IIconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
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