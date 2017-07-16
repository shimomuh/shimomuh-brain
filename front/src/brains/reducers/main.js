import { initialState } from '~/brains/reducers/initialState'
import blueprint from '~/brains/config/svg/blueprint'

export default (state = initialState, action) => {
  switch (action.type) {
  case 'SELECT_COMPONENT': {
    const { payload } = action
    return Object.assign({}, state, payload)
  }
  case 'DID_INTRO_ANIMATION': {
    return Object.assign({}, state, { introAnimation: true })
  }
  case 'RESIZE': {
    const { payload } = action
    const size = payload.size >= blueprint.threshold ? 'wide': 'compact'
    return Object.assign({}, state, { size: size })
  }
  default:
    return state
  }
}
