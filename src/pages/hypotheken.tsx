import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Header from '../components/header'
import Intro from '../components/intro'
import BusinessConsumer from '../components/businessConsumer'
import CrossLinks from '../components/crossLinks'
import FullGridImage from '../components/fullGridImage'
import HowWeWork from '../components/howWeWork'
import Accordions from '../components/accordions'

// Types
import { IllustrationTypes } from '../types/entities'

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

const HOW_WE_WORK_CONTENT = {
  heading: 'Zo werken wij',
  steps: [
    {
      illustration: 'orientation' as IllustrationTypes,
      title: '1. Een gratis oriënterend gesprek',
      paragraph:
        'Maak een gratis eerste afspraak en bespreek uw wensen. We geven je direct antwoord op de meest dringende vragen zoals financiële haalbaarheid,  maandlasten afhankelijk van de hypotheekduur.',
    },
    {
      illustration: 'advisor' as IllustrationTypes,
      title: '2. Onze specialisten gaan aan de slag',
      paragraph:
        'Wanneer u de benodigde documenten hebt aangeleverd gaan onze adviseurs op zoek naar de beste hypotheek voor uw situatie. Wij vergelijken rentepercentages en voorwaarden bij vele geldverstrekkers.',
    },
    {
      illustration: 'completion' as IllustrationTypes,
      title: '3. Afronding van uw hypotheek',
      paragraph:
        'Kies de hypotheek die het beste bij uw situatie past. Onze adviseur sluit de hypotheek af en is altijd beschikbaar voor vragen, ook na afronding. Ook verzekeren bij Assuline? Dat kan meteen geregeld worden.',
    },
  ],
  button: {
    label: 'Maak een gratis afspraak',
    url: '/contact',
  },
}

const CROSSLINKS_CONTENT = {
  cards: [
    {
      image: '/images/hypothekenHeaderImage.png',
      title: 'Goed verzekerd, zowel particulier als zakelijk',
      button: {
        url: '/verzekeren',
        label: 'Naar verzekeren',
      },
    },
    {
      image: '/images/ctaBannerImage.png',
      title: 'Ontmoet het team van Assuline',
      button: {
        url: '/team',
        label: 'Ons team',
      },
    },
  ],
  review: {
    review: '9,8',
    title: 'Ons gemiddelde cijfer op Advieskeuze.nl is een 9,8',
    button: {
      url: 'https://advieskeuze.nl',
      label: 'Bekijk',
    },
  },
}

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
      <HowWeWork data={HOW_WE_WORK_CONTENT} />
      <FullGridImage image="/images/fullGridImage.png" />
      <Accordions data={ACCORDIONS_CONTENT} />
      <CrossLinks data={CROSSLINKS_CONTENT} />
    </Layout>
  )
}

export default Hypoteken
