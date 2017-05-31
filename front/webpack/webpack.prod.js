import webpack from 'webpack'

export default {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: { comments: false },
      compress: { warnings: false },
      sourceMap: false
    }),
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'commons_chunk' })
  ]
}
