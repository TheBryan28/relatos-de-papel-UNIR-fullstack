export interface User {
  id: number
  name: string
  email: string
  profile?: string
  birthdate?: string
  gender?: string
  createdAt: string
  updatedAt: string
}
export interface UserWithPassword extends User {
    password: string;
}