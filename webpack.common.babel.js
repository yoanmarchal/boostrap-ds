import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import Merge from 'webpack-merge'

export default (env = {}) => ({
  mode: env.dev ? 'development' : 'production',

  entry: {
    index: './src/page-index/main.js',
    about: './src/page-about/main.js',
    contacts: './src/page-contacts/main.js',
    accordion: './src/pages/page-accordion/main.js'
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader' // inject CSS to page
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: function () {
                // postcss plugins, can be exported to postcss.config.js
                return [require('autoprefixer')]
              }
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[hash:20].[ext]',
              esModule: false,
              limit: 8192
            }
          }
        ]
      }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page-index/tmpl.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-about/tmpl.html',
      inject: true,
      chunks: ['about'],
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/page-contacts/tmpl.html',
      inject: true,
      chunks: ['contacts'],
      filename: 'contacts.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/page-accordion/tmpl.html',
      inject: true,
      chunks: ['accordion'],
      filename: 'accordion.html'
    })
  ]
})
