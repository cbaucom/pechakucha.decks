const { siteMetadata } = require("./site-config")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        contentPath: `${__dirname}/src/decks/`,
        basePath: "/",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
