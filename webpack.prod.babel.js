
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

import Merge from 'webpack-merge'
import CommonConfig from './webpack.common.babel.js'

export default env => Merge(CommonConfig(env), {
  // https://webpack.js.org/concepts/plugins/
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCssAssetsPlugin({})
    ]
  }
})
