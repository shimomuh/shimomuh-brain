import { Link } from 'react-router-dom'
import { Component } from 'react'
import classNames from 'classnames'
import { SVGBrain } from '~/brains/components/SVG/Brain'

export class BrainNav extends Component {
  constructor (props) {
    super(props)
    this.className = classNames('brainNav__brainBg', props.state)
  }
  render () {
    return (
      <SVGBrain />
    )
  }
}
