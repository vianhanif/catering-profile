const initialState = {
  result: 1,
  lastValues: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
    break
    default:
    break
  }
  return state
}
