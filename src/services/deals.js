import Application from '../db/models/application.js';

export const createDeal = async (payload) => {
  const deal = await Application.create(payload);
  return deal;
};

export const getAllDeals = async () => {
  const deals = await Application.findAll();
  return deals;
};
