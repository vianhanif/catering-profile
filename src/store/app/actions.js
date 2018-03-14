import * as types from './types'

export default {
  [types.LOAD_DATA] (commit, {data, callback}) {
    // assume there an API being hit in here
    let payload = {}
    commit({
      type: types.SETUP,
      payload
    })
    callback()
  }
}
