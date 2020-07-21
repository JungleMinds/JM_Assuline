import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'

// Utils
import { normalizeData } from '../util/data'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import TeamMembers from '../components/teamMembers'

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

const Team = ({ data }: any) => {
  const [pageData, setPageData] = useState<any>(null)

  useEffect(() => {
    const transformed = normalizeData(data.prismicTeamPage)
    setPageData(transformed)
  }, [data])

  return (
    <Layout>
      <SEO title="Team" />
      <Header
        title={pageData && pageData.header.title}
        paragraph={pageData && pageData.header.intro}
        image={pageData && pageData.header.image}
        type="Team"
      />
      <TeamMembers data={TEAM_MEMBERS} />
    </Layout>
  )
}

export default Team

export const pageQuery = graphql`
  query TeamQuery {
    prismicTeamPage {
      data {
        page_title {
          text
        }
        header_intro {
          raw
        }
        header_image {
          url
        }
      }
    }
  }
`
