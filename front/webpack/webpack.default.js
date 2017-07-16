import { JS_SRC, JS_DEST } from '../node_env'

export default {
  entry: {
    'commons_chunk': [
      'babel-polyfill',
      'classnames',
      'react',
      'react-dom',
      'react-router'
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
