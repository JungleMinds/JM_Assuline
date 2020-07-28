import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Header from '../components/header'
import Intro from '../components/intro'
import Toggle from '../components/toggle'

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
    url: '/contact',
  },
]

const INTRO_TEXT =
  'Wij zijn <strong>al 28 jaar</strong> een onafhankelijk financieel adviesbureau en zijn niet gebonden aan een bank. Door onze persoonlijke manier van werken kennen onze specialisten uw situatie goed en kunnen we snel handelen wanneer dat nodig is.'

const ACCORDIONS_CONTENT = {
  particulier: [
    {
      title: 'Aansprakelijkheidsverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Autoverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Brommerverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Caravanverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Dierenverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Inboedelverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Zorgverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Woonverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Reisverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Rechtsbijstandverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Ongevallenverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Motorverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
  ],
  zakelijk: [
    {
      title: 'Aansprakelijkheidsverzekering bedrijven',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Bedrijfsschadeverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Gebouwenverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Goederenverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Inventarisverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Milieuverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Montageverzekering / CAR verzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Ongevallenverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Rechtsbijstandverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Transportverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Verzuimverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Wagenpark (bedrijfsautoverzekering)',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Werkmaterieelverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
    {
      title: 'Zakenreisverzekering',
      paragraph:
        'WA, Beperkt Casco, Beperkt Casco EXTRA en Allrisk autoverzekeringen. Niet alleen goed voor uw auto, maar ook voor uw portemonnee.',
    },
  ],
}

const TOGGLE_CONTENT = {
  private: {
    image: '/images/toggleImageParticulier.png',
    title: 'Particuliere verzekeringen',
    text:
      '<p>Een verzekering nodig die hier niet bij staat? Neem <a href="/contact">contact</a> met ons op, dan maken we het in orde</p>',
    accordions: ACCORDIONS_CONTENT.particulier,
  },
  business: {
    image: '/images/toggleImageZakelijk.png',
    title: 'Zakelijke verzekeringen',
    text:
      '<p>Een verzekering nodig die hier niet bij staat? Neem <a href="/contact">contact</a> met ons op, dan maken we het in orde</p>',
    accordions: ACCORDIONS_CONTENT.zakelijk,
  },
}

const Verzekeren = () => {
  return (
    <Layout>
      <SEO title="Verzekeren" />
      <Header
        title={HEADER_CONTENT.title}
        usps={HEADER_CONTENT.usps}
        buttons={headerButtons}
        image={HEADER_CONTENT.image}
        type="Verzekeren"
      />
      <Intro paragraph={INTRO_TEXT} />
      <Toggle {...TOGGLE_CONTENT} />
    </Layout>
  )
}

export default Verzekeren
