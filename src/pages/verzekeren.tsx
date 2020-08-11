import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Utils
import { normalizeData } from '../util/data'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Body from '../components/body'

const Verzekeren = ({ data }: any) => {
  const [pageData, setPageData] = useState<any>(null)

  useEffect(() => {
    const transformed = normalizeData(data.prismicAssurancePage)
    setPageData(transformed)
  }, [data])

  return (
    <Layout>
      <SEO title="Verzekeren" />
      <Header
        title={pageData && pageData.header.title}
        usps={pageData && pageData.header.usps}
        buttons={pageData && pageData.header.buttons}
        image={pageData && pageData.header.image}
        type="Verzekeren"
      />
      <Body items={pageData && pageData.body} />
    </Layout>
  )
}

export default Verzekeren

export const pageQuery = graphql`
  query AssuranceQuery {
    prismicAssurancePage {
      data {
        page_title {
          text
        }
        header_usps {
          raw
        }
        header_buttonlabel
        header_buttonlink {
          url
          type
          slug
          uid
        }
        header_image {
          url
        }
        body {
          ... on PrismicAssurancePageBodyIntro {
            __typename
            primary {
              intro_text {
                raw
              }
            }
          }
          ... on PrismicAssurancePageBodyCallToActionBanner {
            __typename
            primary {
              banner_title {
                text
              }
              banner_button_label
              banner_button_link {
                url
                type
                slug
                uid
              }
              banner_download_label
              banner_download_link {
                url
                type
                slug
                uid
              }
            }
          }
          ... on PrismicAssurancePageBodyServicesToggle {
            __typename
            primary {
              toggle_private_title {
                text
              }
              toggle_private_title_short
              toggle_private_description {
                raw
              }
              toggle_private_image {
                url
              }
              toggle_business_title {
                text
              }
              toggle_business_title_short
              toggle_business_description {
                raw
              }
              toggle_business_image {
                url
              }
            }
            items {
              toggle_item_type
              toggle_item_title {
                text
              }
              toggle_item_description {
                raw
              }
            }
          }
          ... on PrismicAssurancePageBodyContactForm {
            __typename
            primary {
              form_visible
              form_title {
                text
              }
              form_buttonlabel
            }
          }
          ... on PrismicAssurancePageBodyCrosslinks {
            __typename
            primary {
              crosslink_review_visible
              crosslink_review_score {
                text
              }
              crosslink_review_title {
                text
              }
              crosslink_review_button_label
              crosslink_review_link {
                url
                type
                slug
                uid
              }
            }
            items {
              crosslink_item_title {
                text
              }
              crosslink_item_button_label
              crosslink_item_link {
                url
                type
                slug
                uid
              }
              crosslink_item_image {
                url
              }
            }
          }
        }
      }
    }
  }
`
