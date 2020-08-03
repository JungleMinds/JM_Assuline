import React from 'react'
import styled from 'styled-components'

// Component
import CardComponent from './crossLink'
import GradeCardComponent from './gradeCard'

// Styles
import mediaQueries from '../styles/mediaQueries'

// Types
import { ICrossLink } from '../types/entities'

interface ICrossLinkWithImage extends ICrossLink {
  image: string
}
interface ICrossLinkReview extends ICrossLink {
  review?: string
}
interface IProps {
  crossLinks: ICrossLinkWithImage[]
  review?: ICrossLinkReview
}

const CrossLinks: React.FC<IProps> = ({ crossLinks, review }) => {
  return (
    <Container>
      <Wrapper>
        {crossLinks.map(crossLink => (
          <CrossLink
            key={`crossLink-item-${crossLink.title}`}
            {...crossLink}
            expandButton={!!review}
          />
        ))}
      </Wrapper>
      {review && <GradeCard {...review} />}
    </Container>
  )
}

export default CrossLinks

const Container = styled.section`
  margin: 0 44px 64px;

  ${mediaQueries.from.breakpoint.M`
    margin: 0 24px 80px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    display: flex;
    margin: 0 auto 160px;
    padding: 0 20px;
    max-width: 1264px;
  `}
`

const Wrapper = styled.div`
  ${mediaQueries.from.breakpoint.M`
    display: flex;
    justify-content: space-between;
`}

  ${mediaQueries.from.breakpoint.XL`
    flex: 2;
  `}
`

const CrossLink = styled(CardComponent)`
  ${mediaQueries.from.breakpoint.M`
    width: calc(50% - 12px);
  `}
`

const GradeCard = styled(GradeCardComponent)`
  ${mediaQueries.from.breakpoint.M`
    width: 100%;
  `}

  ${mediaQueries.from.breakpoint.XL`
    width: auto;
    margin-left: 24px;
    flex: 1;
  `}
`
