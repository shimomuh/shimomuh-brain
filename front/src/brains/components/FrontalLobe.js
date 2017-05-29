import { Component } from 'react'
import { BrainNav } from '~/brains/components/BrainNav'
import { Header } from '~/brains/components/Header'
import { Footer } from '~/brains/components/Footer'

export class FrontalLobe extends Component {
  render () {
    return (
      <div>
        <Header />
        <BrainNav state={'_frontalLobe_'} />
        <div className='section'>
          <h2>Fundamental Thought and Motivation</h2>
          <ol className='section__policy'>
            <li>First, make attraction, it's funny not interested</li>
            <li>And then, just as imagined actions</li>
            <li>Finally, had better simply</li>
          </ol>
        </div>
        <Footer />
      </div>
    )
  }
}
