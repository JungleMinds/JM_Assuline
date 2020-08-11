import React, { useEffect, useState } from 'react'

// Utils
import { normalizeData } from '../util/data'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Body from '../components/body'

const ContentPage: React.FC<{ pageContext: any }> = ({ pageContext }) => {
  const [seoTitle, setSEOTitle] = useState<string>('')
  const [pageData, setPageData] = useState<any>(null)

  useEffect(() => {
    const { data } = pageContext

    const transformed = normalizeData(data)

    setSEOTitle(data.uid)
    setPageData(transformed)
  }, [pageContext])

  return (
    <Layout>
      <SEO title={seoTitle} />
      <Header
        title={pageData && pageData.header.title}
        paragraph={pageData && pageData.header.intro}
        image={pageData && pageData.header.image}
        type="Content"
      />
      <Body items={pageData && pageData.body} />
    </Layout>
  )
}

export default ContentPage
