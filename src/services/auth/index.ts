import { User } from 'services/auth/model'
// このfirebaseは、src/firebase/index.tsを参照しているので注意
// initialzeした後の状態を使うため
import firebase from '../../firebase'

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
