/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allPrismicContentPage {
        edges {
          node {
            uid
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
              body {
                ... on PrismicContentPageBodyIntro {
                  __typename
                  primary {
                    intro_text {
                      raw
                    }
                  }
                }
                ... on PrismicContentPageBodyImage {
                  __typename
                  primary {
                    image_image {
                      url
                    }
                  }
                }
                ... on PrismicContentPageBodyContentBlock {
                  __typename
                  primary {
                    content_block_title {
                      text
                    }
                    content_block_content {
                      raw
                    }
                    content_block_button_label
                    content_block_button_link {
                      url
                      uid
                      type
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const pages = result.data.allPrismicContentPage.edges

  pages.forEach(item => {
    const uid = item.node.uid
    const pageData = {
      uid: uid.charAt(0).toUpperCase() + uid.slice(1),
      data: item.node.data,
    }

    createPage({
      path: `/informatie/${uid}`,
      component: require.resolve(`./src/templates/content.tsx`),
      context: { data: pageData },
    })
  })
}
