import * as types from './types'

export default {
  [types.SETUP] (state, action) {
    state = {
      ...state,
      value: action.payload
    }
    return state
  }
}
