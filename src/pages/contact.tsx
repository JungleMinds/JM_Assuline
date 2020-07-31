import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Utils
import { normalizeData } from '../util/data'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Body from '../components/body'

import Location from '../components/location'

// Mock data
const LOCATION_CONTENT = {
  image: '/images/mapImage.png',
  companyName: 'Assuline BV.',
  address: {
    streetAndNumber: 'Herenweg 88',
    postCodeAndLocation: '3645 CL Wilnis',
    postbus: 'Postbus 202',
    postbusCodeAndLocation: '3640 AE Mijdrecht',
  },
  phone: '0297288198',
  email: 'info@assuline.nl',
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
      <Body items={pageData && pageData.body} />
      <Location {...LOCATION_CONTENT} />
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
        }
      }
    }
  }
`
