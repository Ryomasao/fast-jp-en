import { User } from 'services/auth/model'
import * as ActionType from 'store/auth/const'

export const signIn = (user: User) => {
  return {
    type: ActionType.SIGN_IN as typeof ActionType.SIGN_IN,
    payload: user,
  }
}

export const signOut = () => {
  return {
    type: ActionType.SIGN_OUT as typeof ActionType.SIGN_OUT,
  }
}

export type AuthAction = ReturnType<typeof signIn> | ReturnType<typeof signOut>
