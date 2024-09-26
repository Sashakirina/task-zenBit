import createHttpError from 'http-errors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../db/models/user.js';

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

export const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw createHttpError(400, 'Email or passwor invalid');
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw createHttpError(400, 'Email or passwor invalid');
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    },
  );

  return token;
};
