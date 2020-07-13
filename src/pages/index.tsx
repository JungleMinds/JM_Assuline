import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

// Components
import Button from '../components/button'
import Header from '../components/header'
import Services from '../components/services'
import Carousel from '../components/carousel'

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
    url: '/',
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
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ImageContainer>
      <Image />
    </ImageContainer>
    <Link to="/styleguide">Go to styleguide</Link>
    <br />
    <Button>Lees Meer</Button>
    <br />
    <Button icon>Lees Meer</Button>
  </Layout>
)

const ImageContainer = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`

export default Index
