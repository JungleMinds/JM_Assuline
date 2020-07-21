import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Utils
import { normalizeData } from '../util/data'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Intro from '../components/intro'
import Banner from '../components/banner'
import Toggle from '../components/toggle'
import CrossLinks from '../components/crossLinks'

// Mock data
const INTRO_TEXT =
  'Wij zijn <strong>al 28 jaar</strong> een onafhankelijk financieel adviesbureau en zijn niet gebonden aan een bank. Door onze persoonlijke manier van werken kennen onze specialisten uw situatie goed en kunnen we snel handelen wanneer dat nodig is.'

const BANNER_CONTENT = {
  heading:
    'Een verzekering wijzigen of een schade melden? Wij regelen het voor u.',
  button: {
    label: 'Mail of bel ons',
    url: '/contact',
  },
  asset: {
    url: '/assets/europees_schadeformulier.pdf',
    label: 'Aanrijdingsformulier downloaden — PDF',
  },
}

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

const CROSSLINKS_CONTENT = {
  crossLinks: [
    {
      image: '/images/hypothekenHeaderImage.png',
      title: 'Wij bieden onafhankelijk hypotheekadvies',
      button: {
        url: '/hypotheken',
        label: 'Naar hypotheken',
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
}

const Verzekeren = ({ data }: any) => {
  const [pageData, setPageData] = useState<any>(null)

  useEffect(() => {
    const transformed = normalizeData(data.prismicAssurancePage)
    setPageData(transformed)
  }, [data])

  return (
    <Layout>
      <SEO title="Verzekeren" />
      <Header
        title={pageData && pageData.header.title}
        usps={pageData && pageData.header.usps}
        buttons={pageData && pageData.header.buttons}
        image={pageData && pageData.header.image}
        type="Verzekeren"
      />
      <Intro paragraph={INTRO_TEXT} />
      <Banner {...BANNER_CONTENT} />
      <Toggle {...TOGGLE_CONTENT} />
      <CrossLinks {...CROSSLINKS_CONTENT} />
    </Layout>
  )
}

export default Verzekeren

export const pageQuery = graphql`
  query AssuranceQuery {
    prismicAssurancePage {
      data {
        page_title {
          text
        }
        header_usps {
          raw
        }
        header_buttonlabel
        header_buttonlink {
          type
          slug
        }
        header_image {
          url
        }
      }
    }
  }
`
