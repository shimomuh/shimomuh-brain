import { Component } from 'react'
import { BrainNav } from '~/brains/components/BrainNav'
import { Header } from '~/brains/components/Header'
import { Footer } from '~/brains/components/Footer'

export class TemporalLobe extends Component {
  render () {
    return (
      <div>
        <Header />
        <BrainNav state={'_temporalLobe_'} />
        <div className='section'>
          <h2>Experience</h2>
          <p>such as blog<br />coming soon</p>
        </div>
        <Footer />
      </div>
    )
  }
}
