import { render } from 'react-dom'
import { routes } from '~/brains/routes'
import { brainRootDOM } from '~/brains/helpers/domReader'

render(routes(), brainRootDOM)
