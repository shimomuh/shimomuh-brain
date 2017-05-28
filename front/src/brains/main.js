import { render } from 'react-dom'
import { routes } from '~/brains/routes'
import { brainRootDOM } from '~/brains/domReader'

render(routes(), brainRootDOM)
