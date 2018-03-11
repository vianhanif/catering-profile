import * as action from './action-types'
import firebase from '@/firebase'

export default {
  [action.VIEW_CONFIG] ({commit}, {callback}) {
    let database = firebase.database()
    database.ref('config').on('value', (data) => {
      commit(action.VIEW_CONFIG, data.val().value)
      callback()
    })
  }
}
