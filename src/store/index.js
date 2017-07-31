import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const initialState = {
  result: 1,
  lastValues: []
}

const mathReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
    break
  }
  return state
}

const userReducer = (state = {
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
  }
  return state
}

const basicLogger = (store) => (next) => (action) => {
  console.log('logged action', action)
  next(action)
}

const store = createStore(
  combineReducers({
    mathReducer,
    userReducer
  }),
  applyMiddleware(
    // basicLogger,
    logger
  )
)

store.subscribe(() => {
  // console.log('store updated! ', store.getState())
})

export default store
