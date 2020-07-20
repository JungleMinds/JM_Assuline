import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Header from '../components/header'
import Intro from '../components/intro'
import FullGridImage from '../components/fullGridImage'
import Accordions from '../components/accordions'

// Mock data
const HEADER_CONTENT = {
  title: 'Wij bieden onafhankelijk hypotheekadvies',
  usps: [
    '100% onafhankelijk',
    'Vrijblijvend gratis eerste hypotheekgesprek',
    'Zowel particulier als zakelijk',
  ],
  image: '/images/hypothekenHeaderImage.png',
}

const headerButtons = [
  {
    label: 'Maak een gratis afspraak',
    url: '/hypotheken',
  },
]

const INTRO_TEXT =
  'Wij zijn <strong>al 28 jaar</strong> een onafhankelijk financieel adviesbureau en zijn niet gebonden aan een bank. Door onze persoonlijke manier van werken kennen onze specialisten uw situatie goed en kunnen we snel handelen wanneer dat nodig is.'

const ACCORDIONS_CONTENT = [
  {
    title: 'Watvoor hypotheek is geschikt voor mijn situatie?',
    paragraph:
      'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
  },
  {
    title: 'Wat betekent kosten koper?',
    paragraph:
      'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
  },
  {
    title: 'BKR registratie en een hypotheek afsluiten',
    paragraph:
      'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
  },
]

const Hypoteken = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header
        title={HEADER_CONTENT.title}
        usps={HEADER_CONTENT.usps}
        buttons={headerButtons}
        image={HEADER_CONTENT.image}
        type="Hypotheken"
      />
      <Intro paragraph={INTRO_TEXT} />
      <FullGridImage image="/images/fullGridImage.png" />
      <Accordions data={ACCORDIONS_CONTENT} />
    </Layout>
  )
}

export default Hypoteken
