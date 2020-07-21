import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Utils
import { normalizeData } from '../util/data'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Banner from '../components/banner'

const BANNER_CONTENT = {
  heading:
    'Een verzekering wijzigen of een schade melden? Stuur ons een mail of bel en wij regelen het voor u.',
  asset: {
    url: '/assets/europees_schadeformulier.pdf',
    label: 'Aanrijdingsformulier downloaden — PDF',
  },
}

const Contact = ({ data }: any) => {
  const [pageData, setPageData] = useState<any>(null)

  useEffect(() => {
    const transformed = normalizeData(data.prismicContactPage)
    setPageData(transformed)
  }, [data])

  return (
    <Layout>
      <SEO title="Contact" />
      <Header
        title={pageData && pageData.header.title}
        paragraph={pageData && pageData.header.intro}
        buttons={pageData && pageData.header.buttons}
        image={pageData && pageData.header.image}
        type="Contact"
      />
      <Banner {...BANNER_CONTENT} />
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    prismicContactPage {
      data {
        page_title {
          text
        }
        header_intro {
          raw
        }
        header_image {
          url
        }
        header_buttonlabel
        header_buttonlink {
          url
          slug
          type
        }
        header_secondary_buttonlabel
        header_secondary_buttonlink {
          url
          type
          slug
        }
      }
    }
  }
`
