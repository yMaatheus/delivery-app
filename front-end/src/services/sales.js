import api from './api';

export const addSale = (data) => api.post('/sales', { ...data });

export const getBySellerId = (sellerId) => api.get('/sales/find', sellerId);
