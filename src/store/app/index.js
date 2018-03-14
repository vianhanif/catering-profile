import mutations from './mutations'

const initialState = {
  value: null
}

export default (state = initialState, action) => {
  return typeof mutations[action.type] === 'function' ? mutations[action.type](state, action) : state
}
