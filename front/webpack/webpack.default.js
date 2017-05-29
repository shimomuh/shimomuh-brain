import { JS_SRC, JS_DEST } from './local_path'

export default {
  entry: {
    'commons_chunk': [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-router',
      'classnames'
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
  }
}
