import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Header from '../components/header'

// Mock data
const HEADER_CONTENT = {
  title: 'Heeft u een vraag of wilt u een afspraak maken?',
  paragraph: 'Stuur een mail naar info@assuline.nl of bel 0297 - 288198',
  buttons: [
    { label: 'Mail ons', url: 'mailto:janedoe@assuline.nl' },
    { label: 'Bel ons', url: 'tel:0600000000' },
  ],
  image: '/images/contactHeaderImage.png',
}

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Header
      title={HEADER_CONTENT.title}
      paragraph={HEADER_CONTENT.paragraph}
      buttons={HEADER_CONTENT.buttons}
      image={HEADER_CONTENT.image}
      type="Contact"
    />
  </Layout>
)

export default Contact
