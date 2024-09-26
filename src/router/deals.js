import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  addDealController,
  getAllDealsController,
} from '../controllers/deals.js';

const router = Router();

router.post('/', ctrlWrapper(addDealController));

router.get('/', ctrlWrapper(getAllDealsController));

export default router;
