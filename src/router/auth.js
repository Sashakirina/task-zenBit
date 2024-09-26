import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { loginController, signupController } from '../controllers/auth.js';

const router = Router();

router.post('/signup', ctrlWrapper(signupController));

router.post('/login', ctrlWrapper(loginController));

export default router;
