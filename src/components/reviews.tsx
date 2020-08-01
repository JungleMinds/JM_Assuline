import React from 'react'
import styled from 'styled-components'

// Components
import TextComponent from './text'
import RichText from './richText'

// Styling
import { green, white } from '../styles/colors'
import mediaQueries from '../styles/mediaQueries'
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import { plainSubtle, headingLoud } from '../styles/textStyles'

// Typing
import { IReviews, IReview } from 'src/types/entities'

const Reviews: React.FC<IReviews> = ({ items, grade }: IReviews) => {
  return (
    <Container>
      {items.map((review: IReview) => (
        <Block key={`review-${review.name}`}>
          <AspectContainer>
            <Image background={review.image} />
          </AspectContainer>
          <Details>
            <Text underline>
              <RichText content={review.text.raw} />
            </Text>
            <Author>
              {review.name} — {review.location}
            </Author>
          </Details>
        </Block>
      ))}
      {grade && grade.visible && (
        <Block>
          <AspectContainer>
            <Grade>{grade.score}</Grade>
          </AspectContainer>
          <Details>
            <Text>
              <RichText content={grade.text.raw} />
            </Text>
          </Details>
        </Block>
      )}
    </Container>
  )
}

export default Reviews

const Container = styled.div`
  margin: 0 44px 18px;
  display: flex;
  flex-direction: column;

  ${mediaQueries.from.breakpoint.M`
    margin: 0 24px 18px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    margin-bottom: 120px;
  `}
`

const AspectContainer = styled.div`
  max-width: 136px;
  max-height: 136px;
  ${aspectRatio(1, 1)}
  flex-shrink: 0;
  margin-bottom: 16px;

  ${mediaQueries.from.breakpoint.M`
    margin: 0;
    margin-right: 24px;
    min-width: 256px;
    min-height: 256px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    min-width: 288px;
    min-height: 288px;
  `}
`
const Image = styled.div<{ background?: string }>`
  ${aspectRatioChild}
  border-radius: 2px;

  background-image: url('${({ background }) => background}');
  background-size: cover;
  background-position: center center;
`

const Grade = styled.div`
  ${aspectRatioChild}
  display: flex;

  justify-content: center;
  align-items: center;

  ${headingLoud};
  background-color: ${green};
  color: ${white};
`

const Block = styled.div`
  margin: 0 auto 24px;
  max-width: 298px;
  display: flex;
  flex-direction: column;

  ${mediaQueries.from.breakpoint.M`
    flex-direction: row;
    max-width: 720px;
    margin-bottom: 40px;

    :nth-child(even) {
      flex-direction: row-reverse;

      ${AspectContainer} {
        margin: 0;
        margin-left: 24px;
      }
    }
  `}

  ${mediaQueries.from.breakpoint.L`
    max-width: 808px;
  `}
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mediaQueries.from.breakpoint.M`
    flex-basis: 441px;
  `}

  ${mediaQueries.from.breakpoint.L`
    flex-basis: 529px;
  `}

  ${mediaQueries.from.breakpoint.XL`
    flex-basis: 496px;
  `}
`

const Text = styled(TextComponent)`
  padding-bottom: 14px;
  margin-bottom: 8px;
`

const Author = styled.div`
  ${plainSubtle};
  margin: 0;
`
