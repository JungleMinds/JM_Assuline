import React from 'react'
import styled from 'styled-components'

// Types
import { IBasePictogram as IProps } from '../../types/entities'

const BannerPictogram = ({ color, className }: IProps) => (
  <Svg
    className={className}
    color={color}
    viewBox="0 0 176 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path d="M27.02 12.038h29.388v5.887H27.02z" />
      <path d="M21.869 13.51H1.306v51.509h80.816v-51.51H61.696" />
      <path d="M21.869 19.396H7.184v39.736h69.06V19.396H61.57M42.082 65.019v13.245M29.96 77.896h23.51" />
      <path d="M21.877 1.736H61.55v57.396H21.877z" />
      <path d="M27.02 31.17h29.388v5.887H27.02zM27.02 26.387h11.755M27.02 47.359h29.388v5.887H27.02zM27.02 7.255h11.755M27.02 42.576h11.755" />
      <g transform="translate(99.755 14.245)">
        <path d="M.367 0h15.429l23.143 16.189 27.183 4.783s7.347 4.047 8.082 11.405c0 0 1.837 12.51-12.122 16.557h-6.98m-26.816 0H0M38.939 16.189H-.001M71.265 42.811H55.837m-29.02 0H0" />
        <ellipse
          transform="matrix(-1 0 0 1 83.755 0)"
          cx="41.878"
          cy="43.415"
          rx="7.347"
          ry="7.358"
        />
        <ellipse
          transform="matrix(-1 0 0 1 83.755 0)"
          cx="41.878"
          cy="43.415"
          rx="13.959"
          ry="13.981"
        />
        <path d="M8.816 29.066H0M73.55 33.263h-7.77l-12.866-9.44 18.54 2.208" />
      </g>
    </g>
  </Svg>
)

export default BannerPictogram

const Svg = styled.svg<IProps>`
  stroke: ${props => props.color};
  stroke-width: 2;
  fill: none;
`
