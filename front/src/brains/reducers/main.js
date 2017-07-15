import { initialState } from '~/brains/reducers/initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COMPONENT': {
      const { payload } = action
      return Object.assign({}, state, payload)
    }
    case 'DID_INTRO_ANIMATION': {
      return Object.assign({}, state, { introAnimation: true })
    }
    default:
      return state
  }
}
