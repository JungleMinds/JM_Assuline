import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Header from '../components/header'
import HeaderImage from '../images/hypothekenHeaderImage.png'

// Mock data
const HEADER_CONTENT = {
  title: 'Wij bieden onafhankelijk hypotheekadvies',
  usps: [
    '100% onafhankelijk',
    'Vrijblijvend gratis eerste hypotheekgesprek',
    'Zowel particulier als zakelijk',
  ],
  image: HeaderImage,
}

const headerButtons = [
  {
    label: 'Maak een gratis afspraak',
    url: '/hypotheken',
  },
]

const Hypoteken = () => (
  <Layout>
    <SEO title="Home" />
    <Header
      title={HEADER_CONTENT.title}
      usps={HEADER_CONTENT.usps}
      buttons={headerButtons}
      image={HEADER_CONTENT.image}
      type="Hypotheken"
    />
  </Layout>
)

export default Hypoteken
