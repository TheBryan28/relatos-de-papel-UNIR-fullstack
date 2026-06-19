export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  birthDate?: string;
  gender?: string;
  role: string;
  active: boolean;
}
export interface UserWithPassword extends User {
  password: string;
}
