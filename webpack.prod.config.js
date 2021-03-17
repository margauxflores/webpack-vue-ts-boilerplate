const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          'postcss-loader',
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'style.css'
    })
  ]
};

module.exports = merge(commonConfig, prodConfig);
