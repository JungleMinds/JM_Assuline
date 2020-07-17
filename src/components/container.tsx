import React from 'react'
import styled from 'styled-components'

// Styles
import mediaQueries from '../styles/mediaQueries'

// Types
interface IProps {
  className?: string
}

const Container: React.FC<IProps> = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>
}

export default Container

export const Wrapper = styled.div`
  max-width: 1264px;
  display: block;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  ${mediaQueries.from.breakpoint.M`
    padding: 0 24px;
  `}
`
