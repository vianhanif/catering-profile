import * as action from './action-types'

export default {
  [action.VIEW_CONFIG] ({data}) {
    return data.value
  }
}
