import api from './api';

export const getAllUsers = () => api.get('/admin/users');

export const createUser = (data) => api.post('/admin/users', data);
