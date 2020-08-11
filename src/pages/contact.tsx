import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Utils
import { normalizeData } from '../util/data'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Body from '../components/body'

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
      <Body items={pageData && pageData.body} />
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
          type
          slug
          uid
        }
        header_secondary_buttonlabel
        header_secondary_buttonlink {
          url
          type
          slug
          uid
        }
        body {
          ... on PrismicContactPageBodyCallToActionBanner {
            __typename
            primary {
              banner_title {
                text
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
          ... on PrismicContactPageBodyContactForm {
            __typename
            primary {
              form_visible
              form_title {
                text
              }
              form_buttonlabel
            }
          }
          ... on PrismicContactPageBodyLocation {
            __typename
            primary {
              location_company_name
              location_address_street
              location_address_postalcode
              location_address_city
              location_postbox_number
              location_postbox_code
              location_postbox_city
              location_email
              location_phone
              location_image {
                url
              }
            }
          }
        }
      }
    }
  }
`
