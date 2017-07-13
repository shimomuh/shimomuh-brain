import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '~/brains/actions/creators/main'
import { Body } from '~/brains/components/Body'

class BodyContainer extends Component {
  render () {
    return <Body {...this.props} />
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(Actions, dispatch)
)(BodyContainer)
