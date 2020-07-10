import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

// Components
import Header from "../components/header"
import HeaderImage from "../images/contactHeaderImage.png"

// Mock data
const HEADER_CONTENT = {
  title: "Heeft u een vraag of wilt u een afspraak maken?",
  paragraph: "Stuur een mail naar info@assuline.nl of bel 0297 - 288198",
  buttons: [
    { label: "Mail ons", url: "/contact" },
    { label: "Bel ons", url: "/contact" },
  ],
  image: HeaderImage,
}

const Contact = () => (
  <Layout>
    <SEO title="Home" />
    <Header
      title={HEADER_CONTENT.title}
      paragraph={HEADER_CONTENT.paragraph}
      buttons={HEADER_CONTENT.buttons}
      image={HEADER_CONTENT.image}
      type="Contact"
    />
  </Layout>
)

export default Contact
