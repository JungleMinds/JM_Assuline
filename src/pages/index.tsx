import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Utils
import { normalizeData } from '../util/data'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Body from '../components/body'

const Index = ({ data }: any) => {
  const [pageData, setPageData] = useState<any>(null)

  useEffect(() => {
    const transformed = normalizeData(data.prismicHomePage)
    setPageData(transformed)
  }, [data])

  return (
    <Layout>
      <SEO title="Home" />
      <Header
        title={pageData && pageData.header.title}
        paragraph={pageData && pageData.header.intro}
        buttons={pageData && pageData.header.buttons}
        image={pageData && pageData.header.image}
        type="Home"
      />
      <Body items={pageData && pageData.body} />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query HomePageQuery {
    prismicHomePage {
      data {
        page_title {
          text
        }
        header_image {
          url
        }
        header_intro {
          raw
        }
        header_buttonlabel
        header_buttonlink {
          url
          type
          slug
          uid
        }
        body {
          __typename
          ... on PrismicHomePageBodyServices {
            items {
              service_name
              service_description {
                raw
              }
              service_title {
                text
              }
              service_image {
                url
              }
              service_buttonlink {
                url
                type
                slug
                uid
              }
              service_buttonlabel {
                text
              }
            }
          }
          ... on PrismicHomePageBodyCarousel {
            items {
              carousel_image {
                url
              }
            }
            primary {
              carousel_text {
                raw
              }
            }
          }
          ... on PrismicHomePageBodyImageBanner {
            primary {
              imagebanner_text {
                text
              }
              imagebanner_buttonlink {
                url
                type
                slug
                uid
              }
              imagebanner_buttonlabel {
                text
              }
              imagebanner_image {
                url
              }
            }
          }
          ... on PrismicHomePageBodyReviews {
            primary {
              review_site_toggle
              review_site_score
              review_site_text {
                raw
              }
            }
            items {
              review_text {
                raw
              }
              review_name {
                text
              }
              review_city
              review_image {
                url
              }
            }
          }
          ... on PrismicHomePageBodyContactForm {
            primary {
              form_visible
              form_title {
                text
              }
              form_buttonlabel
            }
          }
          ... on PrismicHomePageBodyCallToActionBanner {
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
        }
      }
    }
  }
`
