import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

// Components
import NotFound from '../components/notFound'

// Mock data
const NOT_FOUND_CONTENT = {
  title: 'Helaas, deze pagina bestaat niet (meer)',
  paragraph:
    'Misschien wilde u een gratis eerste hypotheekgesprek plannen of wilde u zich goed laten verzekeren. Wij bieden onafhankelijk advies op maat, voor ondernemers & particulieren.',
  buttons: [
    { label: 'Naar hypotheken', url: '/hypotheken' },
    { label: 'Naar verzekeren', url: '/verzekeren' },
  ],
}

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFound {...NOT_FOUND_CONTENT} />
  </Layout>
)

export default NotFoundPage
