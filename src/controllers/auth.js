import { signup } from '../services/auth.js';

export const signupController = async (req, res) => {
  const user = await signup(req.body);

  res.status(201).json({
    status: 201,
    message: 'User successfully created',
    data: {
      name: user.name,
      email: user.email,
    },
  });
};
