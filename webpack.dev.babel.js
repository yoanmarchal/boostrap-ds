import Merge from 'webpack-merge'
import CommonConfig from './webpack.common.babel.js'

export default env => Merge(CommonConfig(env), {
  devtool: 'source-map',
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 8080,
    writeToDisk: false // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
  }
})