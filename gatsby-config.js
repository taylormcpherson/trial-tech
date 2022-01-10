module.exports = {
  siteMetadata: {
    title: `Zweng Trial Technology`,
    siteUrl: `https://www.zwengtrialtech.com`,  // No trailing slash allowed
    description: `Trial, Litigation, and Legal Tech Support for your Law Practice based out of Portland, Oregon, USA.`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
      __key: `images`,
    },
  ],
};
