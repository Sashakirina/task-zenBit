import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { signupController } from '../controllers/auth.js';

const router = Router();

router.post('/signup', ctrlWrapper(signupController));

export default router;
