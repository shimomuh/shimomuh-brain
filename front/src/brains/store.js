import { createStore } from 'redux'
import reducer from '~/brains/reducers/main'
import { initialState } from '~/brains/reducers/initialState'

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
