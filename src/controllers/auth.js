import { login, signup } from '../services/auth.js';

export const signupController = async (req, res) => {
  const { name, email, password } = await signup(req.body);

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: 'Name, email and paswword are required fields' });
  }

  res.status(201).json({
    status: 201,
    message: 'User successfully created',
    data: {
      name,
      email,
    },
  });
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: 'Email and paswword are required fields' });
  }

  const token = await login(email, password);

  res.json({
    status: 200,
    message: 'User successfully login',
    token,
  });
};
