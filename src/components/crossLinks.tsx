import React from 'react'
import styled from 'styled-components'

// Component
import CardComponent from './card'
import GradeCardComponent from './gradeCard'

// Styles
import mediaQueries from '../styles/mediaQueries'

// Types
import { IBaseCard } from '../types/entities'

interface IProps {
  data: {
    cards: Array<IBaseCard & { image: string }>
    review?: IBaseCard & { review?: string }
  }
}

const CrossLinks: React.FC<IProps> = ({ data }) => {
  return (
    <Container>
      <Wrapper>
        {data.cards.map(card => (
          <Card
            key={`card-item-${card.title}`}
            {...card}
            expandableButton={!!data.review}
          />
        ))}
      </Wrapper>
      {data.review && <GradeCard {...data.review} />}
    </Container>
  )
}

export default CrossLinks

const Container = styled.section`
  margin: 0 44px 40px;

  ${mediaQueries.from.breakpoint.M`
    margin: 0 24px 56px;
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

const Card = styled(CardComponent)`
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
