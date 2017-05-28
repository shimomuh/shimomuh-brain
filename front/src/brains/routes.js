import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { FrontalLobe } from '~/brains/components/FrontalLobe'

export function routes () {
  return (
    <BrowserRouter>
      <Route path='/' component={FrontalLobe} />
    </BrowserRouter>
  )
}
