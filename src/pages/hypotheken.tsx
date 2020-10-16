import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Utils
import { normalizeData } from '../util/data'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Body from '../components/body'

const Hypotheken = ({ data }: any) => {
  const [pageData, setPageData] = useState<any>(null)

  useEffect(() => {
    const transformed = normalizeData(data.prismicMortgagePage)
    setPageData(transformed)
  }, [data])

  return (
    <Layout>
      <SEO
        title="Hypotheken"
        description={
          'Persoonlijk en onafhankelijk hypotheekadvies. 100% onafhankelijk. Wij vergelijken meer dan 30 aanbieders. Vrijblijvend gratis eerste hypotheekgesprek'
        }
      />
      <Header
        title={pageData && pageData.header.title}
        usps={pageData && pageData.header.usps}
        buttons={pageData && pageData.header.buttons}
        image={pageData && pageData.header.image}
        type="Hypotheken"
      />
      <Body items={pageData && pageData.body} />
    </Layout>
  )
}

export default Hypotheken

export const pageQuery = graphql`
  query MortgageQuery {
    prismicMortgagePage {
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
          __typename
          ... on PrismicMortgagePageBodyIntro {
            primary {
              intro_text {
                raw
              }
            }
          }
          ... on PrismicMortgagePageBodyForWho {
            primary {
              forwho_business_title {
                text
              }
              forwho_business_description {
                raw
              }
              forwho_consumer_title {
                text
              }
              forwho_consumer_description {
                raw
              }
              forwho_image {
                url
              }
            }
          }
          ... on PrismicMortgagePageBodyImage {
            primary {
              image_image {
                url
              }
            }
          }
          ... on PrismicMortgagePageBodyHowWeWork {
            primary {
              how_we_work_title {
                text
              }
              how_we_work_button_link {
                url
                type
                slug
                uid
              }
              how_we_work_button_label
            }
            items {
              how_we_work_step_category
              how_we_work_step_title {
                text
              }
              how_we_work_step_content {
                raw
              }
            }
          }
          ... on PrismicMortgagePageBodyCarousel {
            primary {
              carousel_text {
                raw
              }
            }
            items {
              carousel_image {
                url
              }
            }
          }
          ... on PrismicMortgagePageBodyAccordions {
            items {
              accordion_title {
                text
              }
              accordion_content {
                raw
              }
            }
          }
          ... on PrismicMortgagePageBodyContactForm {
            primary {
              form_visible
              form_title {
                text
              }
              form_buttonlabel
            }
          }
          ... on PrismicMortgagePageBodyCrosslinks {
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
