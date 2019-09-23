export enum UserStatus {
  unknown,
  guest,
  authenticated,
}

export interface User {
  uid: string
}

export interface AuthState extends User {
  userStatus: UserStatus
}
