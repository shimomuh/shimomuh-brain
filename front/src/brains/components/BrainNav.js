import { Link } from 'react-router-dom'
import { Component } from 'react'
import classNames from 'classnames'

export class BrainNav extends Component {
  constructor (props) {
    super(props)
    this.className = classNames('__brainIcon', props.state)
  }
  render () {
    return (
      <div className={this.className}>
        <Link to='/frontal_lobes' className='__brainLink--frontalLobe' />
        <Link to='/parietal_lobes' className='__brainLink--parietalLobe' />
        <Link to='/occipital_lobes' className='__brainLink--occipitalLobe' />
        <Link to='/temporal_lobes' className='__brainLink--temporalLobe' />
        <Link to='/cerebellums' className='__brainLink--cerebellum' />
        <Link to='/brainstems' className='__brainLink--brainstem' />
      </div>
    )
  }
}
