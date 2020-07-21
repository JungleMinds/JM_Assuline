require('./config/env')

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ['NODE_ENV', 'COMMIT_HASH', 'VERSION'], // Add ENV vars to whitelist here and they'll show up in your client-side
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['CircularStd'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          // Security Headers
          '/*': [
            `X-Frame-Options: SAMEORIGIN`,
            `X-XSS-Protection: 1; mode=block`,
            `X-Content-Type-Options: nosniff`,
            `Referrer-Policy: same-origin`,
          ],
        },
        mergeSecurityHeaders: false,
        mergeLinkHeaders: false,
        mergeCachingHeaders: false,
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        // The name of your prismic.io repository. This is required.
        repositoryName: process.env.PRISMIC_REPO_NAME,

        // An API access token to your prismic.io repository. This is required.
        accessToken: process.env.PRISMIC_TOKEN,

        // Set a link resolver function used to process links in your content.
        // Fields with rich text formatting or links to internal content use this
        // function to generate the correct link URL.
        // See: https://prismic.io/docs/javascript/query-the-api/link-resolving
        linkResolver: ({ node }) => () => `/${node.uid}`,

        // Provide an object of Prismic custom type JSON schemas to load into
        // Gatsby. This is required.
        schemas: {
          home_page: require('./src/schemas/home_page.json'),
          mortgage_page: require('./src/schemas/mortgage_page.json'),
          assurance_page: require('./src/schemas/assurance_page.json'),
          team_page: require('./src/schemas/team_page.json'),
          contact_page: require('./src/schemas/contact_page.json'),
          content_page: require('./src/schemas/content_page.json'),
        },

        // Set the prefix for the filename where type paths for your schemas are
        // stored. The filename will include the MD5 hash of your schemas after
        // the prefix.
        // This defaults to 'prismic-typepaths---${repositoryName}'.
        typePathsFilenamePrefix: `prismic-typepaths---${process.env.PRISMIC_REPO_NAME}`,
      },
    },
    `gatsby-plugin-robots-txt`,
  ],
}
