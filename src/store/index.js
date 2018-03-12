import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'

const basicLogger = (store) => (next) => (action) => {
  console.log('logged action', action)
  next(action)
}

const store = createStore(
  combineReducers({
    mathReducer: require('./math').default,
    userReducer: require('./user').default
  }),
  applyMiddleware(
    basicLogger,
    logger
  )
)

store.subscribe(() => {
  // console.log('store updated! ', store.getState())
})

export default store
