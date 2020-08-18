require('./config/env')

module.exports = {
  siteMetadata: {
    title: `Assuline`,
    description: `Persoonlijk advies op maat. Voor uw hypotheek, verzekeringen en andere financiële zaken voor zowel consumenten als bedrijven.`,
    author: `@jungleminds`,
    siteUrl: `https://www.assuline.nl`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ['NODE_ENV', 'COMMIT_HASH', 'VERSION'], // Add ENV vars to whitelist here and they'll show up in your client-side
      },
    },
    `gatsby-plugin-polyfill-io`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYITCS_TRACKING_ID,
        head: true,
        anonymize: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `assuline-zeker-voor-u`,
        short_name: `assuline`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `static/images/favicon_192x192.svg`, // This path is relative to the root of the site.
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
          families: ['CircularXXWeb-Bold'],
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
