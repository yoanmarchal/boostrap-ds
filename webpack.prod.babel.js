import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin  from 'mini-css-extract-plugin'
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

import Merge from 'webpack-merge'
import CommonConfig from './webpack.common.babel.js'

export default env => Merge(CommonConfig(env), {

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'source-map',


  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new CleanWebpackPlugin(), // cleans output.path by default
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    })
  ],

  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  }
})
