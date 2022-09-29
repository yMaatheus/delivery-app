import api from './api';

export const addSale = (data) => api.post('/sales', { ...data });

export const getBySellerId = (id) => api.get(`/sales/search?sellerId=${id}`);

export const getByUserId = (userId) => api.get(`/sales/search?userId=${userId}`);

export const getSaleDetails = (seleId) => api.get(`/sales/details/${seleId}`);
