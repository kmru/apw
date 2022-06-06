module.exports = {
  siteMetadata: {
    title: `Cooper's Cave Airsoft & Paintball Warehouse`,
    siteUrl: `https://www.cooperscavepaintball.com`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};
