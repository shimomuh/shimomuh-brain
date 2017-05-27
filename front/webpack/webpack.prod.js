import webpack from 'webpack'

export default {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: { comments: false },
      compress: { warnings: false },
      sourceMap: false
    })
  ]
}
