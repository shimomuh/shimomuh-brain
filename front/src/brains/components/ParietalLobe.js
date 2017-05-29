import { Component } from 'react'
import { BrainNav } from '~/brains/components/BrainNav'
import { Header } from '~/brains/components/Header'
import { Footer } from '~/brains/components/Footer'

export class ParietalLobe extends Component {
  render () {
    return (
      <div>
        <Header />
        <BrainNav state={'_parietalLobe_'} />
        <div className='section'>
          <h2>Concentrate Outside Information</h2>
          <p>contact<br />coming soon</p>
        </div>
        <Footer />
      </div>
    )
  }
}
