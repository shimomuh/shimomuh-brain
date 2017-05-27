import minimist from 'minimist'
import defaultConfig from './webpack.default'
import prodConfig from './webpack.prod'
import devConfig from './webpack.dev'

const ARG = minimist(process.argv.slice(2))

const config = () => {
  switch (ARG.env) {
    case 'prod':
      return Object.assign(defaultConfig, prodConfig)
    case 'dev':
      return Object.assign(defaultConfig, devConfig)
  }
}

export default config()
