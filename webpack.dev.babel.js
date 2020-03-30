import Merge from 'webpack-merge'
import CommonConfig from './webpack.common.babel.js'

export default env => Merge(CommonConfig(env), {
  devtool: 'source-map',
})