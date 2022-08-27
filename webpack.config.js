const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: '/src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/styles.css' }),
    new CopyPlugin({ patterns: [{ from: 'public' }] })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
        generator: { filename: 'img/[name][ext][query]' }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [ 'babel-loader' ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { filename: 'fonts/[name][ext][query]' }
      }
    ]
  }
};
