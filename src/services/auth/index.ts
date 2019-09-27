import firebase from 'firebase/app'
import 'firebase/auth'
import { User } from 'services/auth/model'

const config = {
  apiKey: 'AIzaSyDaXCwJHwm5h8cKtdPcynoVWmqWzRMj7qs',
  authDomain: 'fast-jp-en.firebaseapp.com',
}

firebase.initializeApp(config)

export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

export const logout = () => {
  firebase.auth().signOut()
}

export const fireBaseAuthObserver = (
  signIn: (user: User) => void,
  signOut: () => void,
) => {
  firebase.auth().onAuthStateChanged(user => {
    // userはfirebase.User型
    if (user) {
      signIn(user)
    } else {
      signOut()
    }
  })
}
