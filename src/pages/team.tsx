import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import Header from '../components/header'
import TeamMembers from '../components/teamMembers'

// Mock data
const HEADER_CONTENT = {
  title: 'Ontmoet het team van Assuline',
  paragraph:
    'Al 28 jaar geven wij advies op maat aan bedrijven en consumenten. Daarin vinden wij persoonlijk contact belangrijk. Niet iedere keer contact met een andere medewerker, maar een vaste specialist die direct de juiste service kan bieden.',
  image: '/images/hypothekenHeaderImage.png',
}

const TEAM_MEMBERS = [
  {
    image: '/images/team/fenny.png',
    name: 'Fenny Bijlsma',
    phone: '0623442344',
    email: 'fenny@assuline.nl',
  },
  {
    image: '/images/team/bonnie.png',
    name: 'Rainier Onderwater',
    phone: '0623442344',
    email: 'rainier@assuline.nl',
  },
  {
    image: '/images/team/frederike.png',
    name: 'Frederike Feddema',
    phone: '0623442344',
    email: 'frederike@assuline.nl',
  },
  {
    image: '/images/team/bianca.png',
    name: 'Ronald Lucassen',
    phone: '0623442344',
    email: 'ronald@assuline.nl',
  },
  {
    image: '/images/team/edwin.png',
    name: 'Jane Doe',
    phone: '0623442344',
    email: 'fenny@assuline.nl',
  },
  {
    image: '/images/team/fenny.png',
    name: 'John Doe',
    phone: '0623442344',
    email: 'frederike@assuline.nl',
  },
  {
    image: '/images/team/edwin.png',
    name: 'Lorem Ipsum',
    phone: '0623442344',
    email: 'ronald@assuline.nl',
  },
]

const Team = () => (
  <Layout>
    <SEO title="Team" />
    <Header
      title={HEADER_CONTENT.title}
      image={HEADER_CONTENT.image}
      paragraph={HEADER_CONTENT.paragraph}
      type="Team"
    />
    <TeamMembers data={TEAM_MEMBERS} />
  </Layout>
)

export default Team
