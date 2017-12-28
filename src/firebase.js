import config from '@/config'
import * as firebase from 'firebase'

firebase.initializeApp(config.FIREBASE_CONFIG)

export default firebase
