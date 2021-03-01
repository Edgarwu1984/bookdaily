import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Edgar Wu',
    email: 'edgarwu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Claudia Tang',
    email: 'claudiatang@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
