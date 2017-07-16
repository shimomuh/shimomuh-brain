import webpack from 'webpack'

export default {
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      'PropTypes': 'prop-types'
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'commons_chunk' })
  ]
}
