require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Front-end Experiment",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-styletron",
      options: {
        // You can pass options to Styletron.
        // Prefix all generated classNames:
        prefix: "_",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Front-end Development`,
        short_name: `FE Development`,
        start_url: `/`,
        icon: `src/assets/icon.png`,
        background_color: `#b1e0ca`,
        theme_color: `#00adee`,
        display: `standalone`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GRAPHCMS',
        fieldName: 'graphCmsData',
        url: 'https://api-us-east-1.graphcms.com/v2/cko78ts0v2s2501z03d3421ma/master',
      }
    },
  ],
};
