import * as ActionType from 'store/auth/const'
import { UserStatus, AuthState } from 'services/auth/model'
import { AuthAction } from 'store/auth/actions'

const initialState: AuthState = {
  uid: '',
  userStatus: UserStatus.unknown,
  photoURL: '',
}

export default (state = initialState, action: AuthAction) => {
  switch (action.type) {
    case ActionType.SIGN_IN:
      return {
        ...state,
        uid: action.payload.uid,
        photoURL: action.payload.photoURL,
        userStatus: UserStatus.authenticated,
      }
    case ActionType.SIGN_OUT:
      return { ...state, uid: '', userStatus: UserStatus.guest }
    default:
      return state
  }
}
