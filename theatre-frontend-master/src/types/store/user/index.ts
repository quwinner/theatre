export interface UserState {
  isAuth: boolean
  user: User
}

export interface User {
  id: number
  login: string
  password?: string
  Balanse: number
}
