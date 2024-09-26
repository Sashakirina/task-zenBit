import createHttpError from 'http-errors';
import User from '../db/models/user.js';
import bcrypt from 'bcryptjs';

export const signup = async (payload) => {
  const { name, email, password } = payload;
  const user = await User.findOne({ where: { email } });

  if (user) {
    throw createHttpError(401, 'Email in use');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return newUser;
};
