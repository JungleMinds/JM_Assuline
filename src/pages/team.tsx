import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Header from "../components/header"
import HeaderImage from "../images/hypothekenHeaderImage.png"

// Mock data
const HEADER_CONTENT = {
  title: "Ontmoet het team van Assuline",
  paragraph:
    "Al 28 jaar geven wij advies op maat aan bedrijven en consumenten. Daarin vinden wij persoonlijk contact belangrijk. Niet iedere keer contact met een andere medewerker, maar een vaste specialist die direct de juiste service kan bieden.",
  image: HeaderImage,
}

const Team = () => (
  <Layout>
    <SEO title="Home" />
    <Header
      title={HEADER_CONTENT.title}
      image={HEADER_CONTENT.image}
      paragraph={HEADER_CONTENT.paragraph}
      type="Team"
    />
  </Layout>
)

export default Team
