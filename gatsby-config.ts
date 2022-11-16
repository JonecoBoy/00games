import type { GatsbyConfig } from "gatsby"

const pathPrefix = "/00games";

const config: GatsbyConfig = {
  pathPrefix: `00games`,
  siteMetadata: {
    title: `00Games`,
    description: `DataBase for video-games`,
    lang: `en-us`,
    image: `${pathPrefix}/icon.png`,
    keywords: ["Instagram", "Clone", "Projeto", "Infnet"],
    siteUrl: `https://www.00games.com.br`,
    pathPrefix,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-styled-jsx`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // Footnotes mode (default: true)
        footnotes: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options:{
      typeName: `Yaml`,
    }
    }, 

    {
      resolve: `gatsby-transformer-json`,
      options:{
      typeName: `Json`,
    }
    }, 
    

    `gatsby-transformer-xml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f1faeeff`,
        theme_color: `#3B8BEB`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images

  ]
}

export default config
