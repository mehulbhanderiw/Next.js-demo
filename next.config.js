// next.config.js

const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Plugins specific to the client build
    if (!isServer) {
      config.plugins.push(
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
