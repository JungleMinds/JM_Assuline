import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Header from '../components/header'

// Mock data
const HEADER_CONTENT = {
  title: 'Goed verzekerd, zowel particulier als zakelijk',
  usps: [
    'Totaalpakket aan verzekeringen',
    'Snelle afwikkeling van schades',
    'Zowel particulier als zakelijk',
  ],
  image: '/images/hypothekenHeaderImage.png',
}

const headerButtons = [
  {
    label: 'Neem contact op',
    url: '/verzekeren',
  },
]

const Verzekeren = () => (
  <Layout>
    <SEO title="Home" />
    <Header
      title={HEADER_CONTENT.title}
      usps={HEADER_CONTENT.usps}
      buttons={headerButtons}
      image={HEADER_CONTENT.image}
      type="Verzekeren"
    />
  </Layout>
)

export default Verzekeren
