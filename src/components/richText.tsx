import React from 'react'
import { RichText as RichTextComponent } from 'prismic-reactjs'
import styled from 'styled-components'

// Utils
import { linkResolver } from '../util/data'

// Types
interface IProps {
  content: any
  className?: string
}
const RichText: React.FC<IProps> = ({ content, className }) =>
  content ? (
    <Wrapper className={className}>
      <RichTextComponent render={content} linkResolver={linkResolver} />
    </Wrapper>
  ) : null

export default RichText

const Wrapper = styled.div`
  margin: 0;

  > p {
    margin: 0;
  }

  > ul,
  > ol {
    padding-left: 20px;
    margin-bottom: 40px;

    li {
      margin-bottom: 24px;

      &:last-of-type {
        margin: 0;
      }
    }
  }
`
