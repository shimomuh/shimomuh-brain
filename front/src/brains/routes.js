import { Provider } from 'react-redux'
import { store } from '~/brains/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from '~/brains/containers/notFound'
import Body from '~/brains/containers/body'
import { endpoints } from '~/brains/config/endpoint'

export function routes () {
  const routes = endpoints.map((endpoint, i) => {
    return <Route exact path={endpoint['url']} component={Body} key={i} />
  })
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Body} />
          {routes}
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
