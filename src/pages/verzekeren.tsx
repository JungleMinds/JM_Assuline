import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Header from '../components/header'
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
    url: '/verzekeren',
  },
]

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
      'Een verzekering nodig die hier niet bij staat? Neem contact met ons op, dan maken we het in orde',
    accordions: ACCORDIONS_CONTENT.particulier,
  },
  business: {
    image: '/images/toggleImageZakelijk.png',
    title: 'Zakelijke verzekeringen',
    text:
      'Een verzekering nodig die hier niet bij staat? Neem contact met ons op, dan maken we het in orde',
    accordions: ACCORDIONS_CONTENT.zakelijk,
  },
}

const Verzekeren = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header
        title={HEADER_CONTENT.title}
        usps={HEADER_CONTENT.usps}
        buttons={headerButtons}
        image={HEADER_CONTENT.image}
        type="Verzekeren"
      />
      <Toggle {...TOGGLE_CONTENT} />
    </Layout>
  )
}

export default Verzekeren
