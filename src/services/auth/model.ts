export enum UserStatus {
  unknown,
  guest,
  authenticated,
}

// firebase.Userをそのまま使った方がいいのかな？
export interface User {
  uid: string
  photoURL: string | null
}

export interface AuthState extends User {
  userStatus: UserStatus
}
