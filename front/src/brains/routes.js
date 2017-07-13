import { Provider } from 'react-redux'
import { store } from '~/brains/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NotFound } from '~/brains/components/NotFound'
import Body from '~/brains/containers/Body'

export function routes () {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Body} />
          <Route exact path='/frontal_lobes' component={Body} />
          <Route exact path='/temporal_lobes' component={Body} />
          <Route exact path='/parietal_lobes' component={Body} />
          <Route exact path='/occipital_lobes' component={Body} />
          <Route exact path='/cerebellums' component={Body} />
          <Route exact path='/brainstems' component={Body} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
