import { Component } from 'react'
import { BrainNav } from '~/brains/components/BrainNav'
import { Header } from '~/brains/components/Header'
import { Footer } from '~/brains/components/Footer'

export class OccipitalLobe extends Component {
  render () {
    return (
      <div>
        <Header />
        <BrainNav state={'_occipitalLobe_'} />
        <div className='section'>
          <h2>Visiblization such as Product or Service</h2>
          <p>coming soon</p>
        </div>
        <Footer />
      </div>
    )
  }
}
