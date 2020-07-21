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
const RichText: React.FC<IProps> = ({ content, className }) => {
  return (
    <Content
      className={className}
      render={content}
      linkResolver={linkResolver}
    />
  )
}

export default RichText

const Content = styled(RichTextComponent)`
  margin: 0;
`
