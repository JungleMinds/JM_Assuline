import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Header from '../components/header'
import Intro from '../components/intro'
import FullGridImage from '../components/fullGridImage'
import Accordions from '../components/accordions'
import BusinessConsumer from '../components/businessConsumer'

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
    url: '/contact',
  },
]

const INTRO_TEXT =
  'Wij zijn <strong>al 28 jaar</strong> een onafhankelijk financieel adviesbureau en zijn niet gebonden aan een bank. Door onze persoonlijke manier van werken kennen onze specialisten uw situatie goed en kunnen we snel handelen wanneer dat nodig is.'

const BUSINESS_CONSUMER_CONTENT = {
  image: '/images/pictogramXL.png',
  business: {
    title: 'Voor ondernemers',
    paragraph:
      'Een zakelijke financiëring of vastgoed hypotheek? Onze specialisten leveren maatwerk en helpen u uw doelen te bereiken.',
  },
  consumer: {
    title: 'Voor consumenten',
    paragraph:
      'Uw eerste woning, een volgende woning of een hypotheek oversluiten? Wij geven hypotheekadvies op maat voor iedere situatie.',
  },
}

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
      <SEO title="Hypotheken" />
      <Header
        title={HEADER_CONTENT.title}
        usps={HEADER_CONTENT.usps}
        buttons={headerButtons}
        image={HEADER_CONTENT.image}
        type="Hypotheken"
      />
      <Intro paragraph={INTRO_TEXT} />
      <BusinessConsumer {...BUSINESS_CONSUMER_CONTENT} />
      <FullGridImage image="/images/fullGridImage.png" />
      <Accordions data={ACCORDIONS_CONTENT} />
    </Layout>
  )
}

export default Hypoteken
