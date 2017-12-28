import * as action from './action-types'
import firebase from '@/firebase'

export default {
  [action.VIEW_CONFIG] ({commit}) {
    let database = firebase.database()
    database.ref('config').on('value', (data) => {
      commit(mutation.VIEW_CONFIG, data.val())
    })
  }
}
