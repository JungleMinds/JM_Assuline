import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Header from '../components/header'
import Banner from '../components/banner'

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

const BANNER_CONTENT = {
  heading:
    'Een verzekering wijzigen of een schade melden? Stuur ons een mail of bel en wij regelen het voor u.',
  asset: {
    url: '/assets/europees_schadeformulier.pdf',
    label: 'Aanrijdingsformulier downloaden — PDF',
  },
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
    <Banner {...BANNER_CONTENT} />
  </Layout>
)

export default Contact
