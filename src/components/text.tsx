import React from 'react'
import styled from 'styled-components'

// Styles
import { plainNormal } from '../styles/textStyles'
import { dark } from '../styles/colors'

// Types
interface IProps {
  htmlText?: string
  underline?: boolean
  className?: string
}

const TextComponent: React.FC<IProps> = ({
  children,
  htmlText,
  underline,
  className,
}) => (
  <Text
    underline={underline}
    className={className}
    {...(htmlText && { dangerouslySetInnerHTML: { __html: htmlText } })}
  >
    {children}
  </Text>
)

export default TextComponent

const Text = styled.div<{ underline?: boolean; htmlText?: string }>`
  ${plainNormal};
  margin: 0;
  padding: 0;
  position: relative;
  ${props =>
    props.htmlText &&
    `
    overflow-wrap: normal;
    hyphens: none;
  `}

  > p {
    margin: 0;
  }

  ${props =>
    props.underline &&
    `
      :after {
        position: absolute;
        content: "";
        background: ${dark};
        width: 40px;
        height: 2px;
        bottom: 0;
        left: 0;
      }
  `}
`
