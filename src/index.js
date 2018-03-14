import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './assets/scss/index.scss'
import Home from './pages/Home'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import * as firebase from 'firebase'
import config from './config'

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

firebase.initializeApp(config.FIREBASE_CONFIG)
