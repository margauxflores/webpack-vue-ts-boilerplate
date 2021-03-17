const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config');

const devConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ],
      },
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
    port: 9999,
    overlay: true,
    open: true,
    historyApiFallback: true
  }
};

module.exports = merge(commonConfig, devConfig);
