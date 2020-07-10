import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// Components
import Button from "../components/button"
import Header from "../components/header"
import HeaderImage from "../images/homeHeaderImage.png"

// Mock data
const HEADER_CONTENT = {
  title: "Persoonlijk advies op maat",
  paragraph:
    "Voor uw hypotheek, verzekeringen en andere financiële zaken voor zowel consumenten als bedrijven.",
  image: HeaderImage,
  type: "Hypotheken",
}

const headerButtons = [
  {
    label: "Neem contact op",
    url: "/",
  },
]

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
