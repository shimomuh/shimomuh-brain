import webpack from 'webpack'

export default {
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'commons_chunk' })
  ]
}
