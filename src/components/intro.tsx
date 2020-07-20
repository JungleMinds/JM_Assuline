import React from 'react'
import styled from 'styled-components'

// Styles
import mediaQueries from '../styles/mediaQueries'
import * as textStyles from '../styles/textStyles'
import { dark } from '../styles/colors'

interface IProps {
  paragraph: string
}

const Intro: React.FC<IProps> = ({ paragraph }) => (
  <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }}></Paragraph>
)

export default Intro

const Paragraph = styled.p`
  ${textStyles.plainLoud}
  margin: 0 44px 64px;
  padding-left: 8px;
  position: relative;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background: ${dark};
    border-radius: 1px;
  }

  ${mediaQueries.from.breakpoint.M`
    margin: 0 24px 80px;
    padding-left: 16px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    max-width: 808px;
    margin: 0 auto 160px;
  `}
`
