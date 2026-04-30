export const users = [
  {
    id: 1,
    name: 'Juan Perez',
    email: 'juan@papel.com',
    password: '123456',
    profile: 'https://randomuser.me/api/portraits',
    birthdate: '1990-01-01',
    gender: 'male',
    createdAt: '2023-01-01T00:00:00Z',
    updatedAt: '2023-01-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'Maria Lopez',
    email: 'maria@papel.com',
    password: 'abcdef',
    profile: 'https://randomuser.me/api/portraits',
    birthdate: '1992-05-14',
    gender: 'female',
    createdAt: '2023-02-10T00:00:00Z',
    updatedAt: '2023-02-10T00:00:00Z',
  },
  {
    id: 3,
    name: 'Carlos Ramirez',
    email: 'carlos@papel.com',
    password: 'qwerty',
    profile: 'https://randomuser.me/api/portraits',
    birthdate: '1988-11-22',
    gender: 'male',
    createdAt: '2023-03-20T00:00:00Z',
    updatedAt: '2023-03-20T00:00:00Z',
  },
  {
    id: 4,
    name: 'Ana Torres',
    email: 'ana@papel.com',
    password: 'zxcvbn',
    profile: 'https://randomuser.me/api/portraits',
    birthdate: '1995-08-03',
    gender: 'female',
    createdAt: '2023-04-18T00:00:00Z',
    updatedAt: '2023-04-18T00:00:00Z',
  },
];

export const mockLogin = (email: string, password: string) => {
  const user = users.find(u => u.email === email && u.password === password);
  return user;
};
