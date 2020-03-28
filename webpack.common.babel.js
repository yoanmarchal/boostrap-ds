import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import ComponentsConfig from './webpack.components.babel.js'

import Merge from 'webpack-merge'
import HtmlWebpackTagsPlugin from 'html-webpack-tags-plugin'

export default (env = {}) =>
  Merge(ComponentsConfig(env), {
    mode: env.dev ? 'development' : 'production',

    entry: {
      styles: './src/scss/main.scss',
      index: './src/page-index/main.js'
      // about: './src/page-about/main.js',
      // contacts: './src/page-contacts/main.js',
      // accordion: './src/pages/page-accordion/main.js',
      // bulletpoint: './src/pages/page-bulletpoint/main.js',
      // buttons: './src/pages/page-buttons/main.js',
      // cards: './src/pages/page-cards/main.js',
      // carousel: './src/pages/page-carousel/main.js',
      // dialogs: './src/pages/page-dialogs/main.js',
      // forms: './src/pages/page-forms/main.js',
      // indicators: './src/pages/page-indicators/main.js',
      // links: './src/pages/page-links/main.js',
      // modal: './src/pages/page-modal/main.js',
      // nav: './src/pages/page-nav/main.js',
      // navbar: './src/pages/page-navbar/main.js',
      // pagination: './src/pages/page-pagination/main.js',
      // priorityNav: './src/pages/page-priorityNav/main.js',
      // progressBars: './src/pages/page-progressBars/main.js',
      // stepbar: './src/pages/page-stepbar/main.js',
      // tables: './src/pages/page-tables/main.js',
      // tabs: './src/pages/page-tabs/main.js',
      // typographie: './src/pages/page-typographie/main.js'
    },

    // https://webpack.js.org/concepts/loaders/
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: env.dev ? 'style-loader' : MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader?url=false' // translates CSS into CommonJS modules
            },
            // {
            //   loader: 'postcss-loader', // Run postcss actions
            //   options: {
            //     plugins: function () {
            //       // postcss plugins, can be exported to postcss.config.js
            //       return [
            //         require('autoprefixer')
            //       ]
            //     }
            //   }
            // },
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass')
              }
            }
          ]
        },
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
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            'css-loader'
          ]
        },
        {
          // Load all images as base64 encoding if they are smaller than 8192 bytes
          test: /\.(png|jpe?g|gif)$/i,
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
        },
        {
          test: /\.svg/,
          use: {
            loader: 'svg-url-loader',
            options: {}
          }
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
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
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-bulletpoint/tmpl.html',
        inject: true,
        chunks: ['bulletpoint'],
        filename: 'bulletpoint.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-buttons/tmpl.html',
        inject: true,
        chunks: ['buttons'],
        filename: 'buttons.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-cards/tmpl.html',
        inject: true,
        chunks: ['cards'],
        filename: 'cards.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-carousel/tmpl.html',
        inject: true,
        chunks: ['carousel'],
        filename: 'carousel.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-dialogs/tmpl.html',
        inject: true,
        chunks: ['dialogs'],
        filename: 'dialogs.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-forms/tmpl.html',
        inject: true,
        chunks: ['forms'],
        filename: 'forms.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-indicators/tmpl.html',
        inject: true,
        chunks: ['indicators'],
        filename: 'indicators.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-links/tmpl.html',
        inject: true,
        chunks: ['links'],
        filename: 'links.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-modal/tmpl.html',
        inject: true,
        chunks: ['modal'],
        filename: 'modal.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-nav/tmpl.html',
        inject: true,
        chunks: ['nav'],
        filename: 'nav.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-navbar/tmpl.html',
        inject: true,
        chunks: ['navbar'],
        filename: 'navbar.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-pagination/tmpl.html',
        inject: true,
        chunks: ['pagination'],
        filename: 'pagination.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-priorityNav/tmpl.html',
        inject: true,
        chunks: ['priorityNav'],
        filename: 'priorityNav.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-progressBars/tmpl.html',
        inject: true,
        chunks: ['progressBars'],
        filename: 'progressBars.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-stepbar/tmpl.html',
        inject: true,
        chunks: ['stepbar'],
        filename: 'stepbar.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-tables/tmpl.html',
        inject: true,
        chunks: ['tables'],
        filename: 'tables.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-tabs/tmpl.html',
        inject: true,
        chunks: ['tabs'],
        filename: 'tabs.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/pages/page-typographie/tmpl.html',
        inject: true,
        chunks: ['typographie'],
        filename: 'typographie.html'
      }),
      new HtmlWebpackTagsPlugin({ tags: ['./css/style.css'], append: true }),

      new CleanWebpackPlugin(), // cleans output.path by default
      new MiniCssExtractPlugin({
        filename: 'css/style.css',
        chunkFilename: 'css/style.css'
      })
    ]
  })
