import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

// Components
import Button from '../components/button'
import Header from '../components/header'
import Services from '../components/services'
import Carousel from '../components/carousel'
import Reviews from '../components/reviews'
import ImageBanner from '../components/imageBanner'

// Types
import { ServiceTypes } from '../types/entities'

// Mock data
const HEADER_CONTENT = {
  title: 'Persoonlijk advies op maat',
  paragraph:
    'Voor uw hypotheek, verzekeringen en andere financiële zaken voor zowel consumenten als bedrijven.',
  image: '/images/homeHeaderImage.png',
  type: 'Hypotheken',
}

const headerButtons = [
  {
    label: 'Neem contact op',
    url: '/contact',
  },
]

const SERVICES = [
  {
    title: 'Goed verzekerd, zowel particulier als zakelijk',
    paragraph:
      'Wij zijn niet gebonden aan een verzekeraar, maar zoeken alles uit en vinden de beste aanbieder voor uw situatie. We bieden totaalpakketten, maar ook losse verzekeringen voor consumenten én voor bedrijven.',
    buttonLabel: 'Naar verzekeren',
    buttonUrl: '/verzekeren',
    image: '/images/hypothekenHeaderImage.png',
    type: 'Verzekeren' as ServiceTypes,
  },
  {
    title: 'Hypotheekadvies voor ondernemers én consumenten',
    paragraph:
      'Wij zijn een onafhankelijk werkend financieel adviesbureau. Door onze persoonlijke manier van werken kennen onze specialisten uw situatie goed en kunnen we snel handelen wanneer dat nodig is. Een eerste hypotheekgesprek is bij Assuline altijd gratis.',
    buttonLabel: 'Naar hypotheken',
    buttonUrl: '/hypotheken',
    image: '/images/hypothekenHeaderImage.png',
    type: 'Hypotheken' as ServiceTypes,
  },
]

const CAROUSEL_DATA = {
  images: [
    '/images/carouselImage.png',
    '/images/carouselImage.png',
    '/images/carouselImage.png',
  ],
  heading:
    'Wij vergelijken rentepercentages en voorwaarden bij meer dan 20 geldverstrekkers',
}
const REVIEWS_CONTENT = {
  reviews: [
    {
      image: {
        src: '/images/hypothekenHeaderImage.png',
        alt: 'Review from this person',
      },
      text:
        '“Mijn adviseur bij Assuline heeft mij ontzettend snel en goed geholpen bij het afsluiten van mijn verzekeringspakket.”',
      author: 'Michelle Terpstra',
      location: 'Amsterdam',
    },
    {
      image: {
        src: '/images/hypothekenHeaderImage.png',
        alt: 'Review from this person',
      },
      text:
        '“Onze adviseur heeft echt goed met ons meegedacht. Wij hadden alle vertrouwen in Assuline, en dat bleek terecht te zijn.”',
      author: 'Frank & Marjan',
      location: 'Bussum',
    },
  ],
  grade: {
    active: true,
    score: 9.8,
    text:
      "<p>Gebaseerd op 48 goedgekeurde geschreven reviews krijgen wij een gemiddeld cijfer van 9,8 op <a href='www.Advieskeuze.nl'>Advieskeuze.nl</a></p>",
  },
}
const CTA_BANNER_CONTENT = {
  image: '/images/ctaBannerImage.png',
  title: 'Al 28 jaar advies op maat',
  button: {
    label: 'Ons team',
    url: '/team',
  },
}

const Index = () => (
  <Layout>
    <SEO title="Home" />
    <Header
      title={HEADER_CONTENT.title}
      paragraph={HEADER_CONTENT.paragraph}
      buttons={headerButtons}
      image={HEADER_CONTENT.image}
      type="Home"
    />
    <Services services={SERVICES} />
    <Carousel images={CAROUSEL_DATA.images} heading={CAROUSEL_DATA.heading} />
    <Reviews {...REVIEWS_CONTENT} />
    <ImageBanner
      image={CTA_BANNER_CONTENT.image}
      title={CTA_BANNER_CONTENT.title}
      button={CTA_BANNER_CONTENT.button}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageContainer>
      <Image />
    </ImageContainer>
    <Button to="/styleguide" icon>
      Go to styleguide
    </Button>
  </Layout>
)

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

export default Index
