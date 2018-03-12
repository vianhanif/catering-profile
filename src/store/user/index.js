export default (state = {
  name: 'Alvian',
  lastValues: []
}, action) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break
      default:
      break
  }
  return state
}
