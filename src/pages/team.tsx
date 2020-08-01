import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Utils
import { normalizeData } from '../util/data'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Body from '../components/body'

const Team = ({ data }: any) => {
  const [pageData, setPageData] = useState<any>(null)

  useEffect(() => {
    const transformed = normalizeData(data.prismicTeamPage)
    setPageData(transformed)
  }, [data])

  return (
    <Layout>
      <SEO title="Team" />
      <Header
        title={pageData && pageData.header.title}
        paragraph={pageData && pageData.header.intro}
        image={pageData && pageData.header.image}
        type="Team"
      />
      <Body items={pageData && pageData.body} />
    </Layout>
  )
}

export default Team

export const pageQuery = graphql`
  query TeamQuery {
    prismicTeamPage {
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
        body {
          ... on PrismicTeamPageBodyTeam {
            __typename
            items {
              team_item_name {
                text
              }
              team_item_phone
              team_item_email
              team_item_image {
                url
              }
            }
          }
          ... on PrismicTeamPageBodyContactForm {
            __typename
            primary {
              form_visible
              form_title {
                text
              }
              form_buttonlabel
            }
          }
        }
      }
    }
  }
`
