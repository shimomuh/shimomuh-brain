import path from 'path'
import webpack from 'webpack'
const FRONT = __dirname
const JS_SRC = path.resolve(`${FRONT}/src`)
const JS_DEST = path.resolve(`${FRONT}/../app/assets/javascripts/`)

export default {
  entry: {
    'commons_chunk': [
      'babel-polyfill',
      'react',
      'react-dom'
    ],
    'brains': `${JS_SRC}/brains/main`
  },
  output: {
    path: JS_DEST,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    alias: { '~': JS_SRC }
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({
    //  minimize: true,
    //  output: { comments: false },
    //  compress: { warnings: false },
    //  sourceMap: false
    //}),
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'commons_chunk' })
  ]
}
