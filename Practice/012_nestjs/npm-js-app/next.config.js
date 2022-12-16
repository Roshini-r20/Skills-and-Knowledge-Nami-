require('@remy/envy');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(['API_URL']));

    return config;
  }
});
