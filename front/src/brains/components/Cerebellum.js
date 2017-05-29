import { Component } from 'react'
import { BrainNav } from '~/brains/components/BrainNav'
import { Header } from '~/brains/components/Header'
import { Footer } from '~/brains/components/Footer'

export class Cerebellum extends Component {
  render () {
    return (
      <div>
        <Header />
        <BrainNav state={'_cerebellum_'} />
        <div className='section'>
          <h2>Habit</h2>
          <p>like a blog<br />coming soon</p>
        </div>
        <Footer />
      </div>
    )
  }
}
