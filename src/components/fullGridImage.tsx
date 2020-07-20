import React from 'react'
import styled from 'styled-components'

// Styles
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import mediaQueries from '../styles/mediaQueries'

// Types
interface IProps {
  image: string
}

const FullGridImage: React.FC<IProps> = ({ image }) => {
  return (
    <Container>
      <Image background={image} />
    </Container>
  )
}

export default FullGridImage

const Container = styled.div`
  ${aspectRatio(288, 168)}
  max-width: 1224px;
  margin: 0 44px 64px;
  padding: 0;

  ${mediaQueries.from.breakpoint.M`
    ${aspectRatio(720, 400)}
    margin: 0 24px 80px;
  `}

  ${mediaQueries.from.breakpoint.L`
    ${aspectRatio(982, 480)}
  `}

  ${mediaQueries.from.breakpoint.XL`
    ${aspectRatio(1224, 544)}
    margin: 0 auto 160px;
  `}
`

const Image = styled.div<{ background?: string }>`
  ${aspectRatioChild}
  border-radius: 2px;

  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-position: center center;
`
