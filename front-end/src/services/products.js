import api from './api';

export const getAll = () => api.get('/products');

export const getImage = (image) => api.get(`/images/${image}`);
