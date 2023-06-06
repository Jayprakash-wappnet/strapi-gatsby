/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Strapi-gatsby-test`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://projects.wappnet.us:4001/api/type-awards?populate=*&locale=en",
        collectionTypes: ["type-award"],
        queryLimit: 1000
      }
    }
  ]
};
