import { Component } from 'react'
import { BrainNav } from '~/brains/components/BrainNav'
import { Header } from '~/brains/components/Header'
import { Footer } from '~/brains/components/Footer'

export class Brainstem extends Component {
  render () {
    return (
      <div>
        <Header />
        <BrainNav state={'_brainstem_'} />
        <div className='section'>
          <h2>Send Information Outward</h2>
          <p>links<br />coming soon</p>
        </div>
        <Footer />
      </div>
    )
  }
}
