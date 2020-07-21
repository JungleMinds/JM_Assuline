import React from 'react'
import styled from 'styled-components'

// Styling
import { green, white, dark } from '../styles/colors'
import mediaQueries from '../styles/mediaQueries'
import aspectRatio, { aspectRatioChild } from '../styles/aspectRatio'
import { plainNormal, plainSubtle, headingLoud } from '../styles/textStyles'

// Typing
import { IReviews, IReview } from 'src/types/entities'

const Reviews: React.FC<IReviews> = ({ reviews, grade }: IReviews) => {
  return (
    <Container>
      {reviews.map((review: IReview) => (
        <Block key={`review-${review.author}`}>
          <AspectContainer>
            <Image background={review.image.src} />
          </AspectContainer>
          <Details>
            <Text underline>{review.text}</Text>
            <Author>
              {review.author} — {review.location}
            </Author>
          </Details>
        </Block>
      ))}
      {grade && grade.active && (
        <Block>
          <AspectContainer>
            <Grade>{grade.score}</Grade>
          </AspectContainer>
          <Details>
            <Text dangerouslySetInnerHTML={{ __html: grade.text }} />
          </Details>
        </Block>
      )}
    </Container>
  )
}

export default Reviews

const Container = styled.div`
  margin: 160px auto;

  display: flex;
  flex-direction: column;
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
  margin: 0 auto 40px;
  max-width: 298px;
  display: flex;
  flex-direction: column;

  ${mediaQueries.from.breakpoint.M`
    flex-direction: row;
    max-width: 720px;

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
`

const Text = styled.div<{ underline?: boolean }>`
  ${plainNormal};
  margin: 0;
  position: relative;
  padding-bottom: 16px;
  margin-bottom: 8px;

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

const Author = styled.div`
  ${plainSubtle};
  margin: 0;
`
