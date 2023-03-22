const nextBuildId = require('next-build-id');
const styledWebpack = require('styled-jsx/webpack');
const nextTranslate = require('next-translate-plugin');

const nextConfig = nextTranslate({
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  images: {
    domains: ['https://abs.ecomx.vn'],
  },

  webpack(config, { defaultLoaders }) {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });

    config.module.rules.push({
      test: /\.scss$|\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: styledWebpack.loader,
          options: {
            type: (_, options) => options.query?.type || 'global', // default global
          },
        },
        'sass-loader',
      ],
    });

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  generateBuildId: () => nextBuildId({ dir: __dirname }),
});

module.exports = nextConfig;
