import { initialState } from '~/brains/reducers/initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COMPONENT': {
      const { payload } = action
      return Object.assign({}, state, payload)
    }
    default:
      return state
  }
}
