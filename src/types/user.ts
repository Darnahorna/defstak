export interface User {
  id: number
  name: string
  surname: string
  email: string
  picture_url: string
  role: number
}

export type UserInput = Omit<User, 'id' | 'picture_url'>

export type Headers = (keyof User)[]
