import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Pokemon Card Store`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-sass", {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        "@styles": path.resolve(__dirname, 'src/styles'),
      },
      extensions: []
    }
  }]
};

export default config;
