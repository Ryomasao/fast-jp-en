import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDaXCwJHwm5h8cKtdPcynoVWmqWzRMj7qs',
  authDomain: 'fast-jp-en.firebaseapp.com',
}

firebase.initializeApp(config)

export default firebase
