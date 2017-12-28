import * as action from './action-types'

export default {
  [action.VIEW_CONFIG] ({data}, value) {
    data.value = value
  }
}
