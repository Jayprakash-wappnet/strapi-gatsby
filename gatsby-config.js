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
        apiURL: "http://projects.wappnet.us:4001/",
        collectionTypes: ["type_award"],
        queryLimit: 100000,
        token:
          "686df2682e2380d5c71fee55326aa3a51139b01960e64e8d717e34316a89fa844aaef87391c200044cf498fd195f151fa9fd8cd33d4fc109e6e47c06ce0c16af9c1611b4b4ec4aff1a94205cfbec1548ff5883fcf5ee425ee3f66568a9cbd8a247349a3bb90acf997e38a98e9a301c6b8d59621952beab68967680706c2b2e3c"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};
