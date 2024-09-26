import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.post('/deals', ctrlWrapper());

export default router;
