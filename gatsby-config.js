/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Strapi-gatsby-test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://projects.wappnet.us:4001/api/faq-page",
        queryLimit: 1000,
        collectionTypes: ["Faq-page"]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};
