import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { FrontalLobe } from '~/brains/components/FrontalLobe'
import { TemporalLobe } from '~/brains/components/TemporalLobe'
import { ParietalLobe } from '~/brains/components/ParietalLobe'
import { OccipitalLobe } from '~/brains/components/OccipitalLobe'
import { Cerebellum } from '~/brains/components/Cerebellum'
import { Brainstem } from '~/brains/components/Brainstem'
import { NotFound } from '~/brains/components/NotFound'

export function routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={FrontalLobe} />
        <Route exact path='/frontal_lobes' component={FrontalLobe} />
        <Route exact path='/temporal_lobes' component={TemporalLobe} />
        <Route exact path='/parietal_lobes' component={ParietalLobe} />
        <Route exact path='/occipital_lobes' component={OccipitalLobe} />
        <Route exact path='/cerebellums' component={Cerebellum} />
        <Route exact path='/brainstems' component={Brainstem} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
