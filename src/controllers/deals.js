import { createDeal, getAllDeals } from '../services/deals.js';

export const addDealController = async (req, res) => {
  const deal = await createDeal(req.body);

  res.status(201).json({
    status: 201,
    message: 'successfully created deal',
    data: deal,
  });
};

export const getAllDealsController = async (req, res) => {
  const deals = await getAllDeals();

  res.json({
    status: 200,
    message: 'All deals',
    data: deals,
  });
};
