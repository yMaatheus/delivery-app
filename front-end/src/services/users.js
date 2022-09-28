import api from './api';

export const getMe = () => api.get('/users/me');

export const login = (data) => api.post('/login', data);

export const register = (data) => api.post('/users', { ...data, role: 'customer' });

export const getByRole = (role) => api.get(`/users/search?role=${role}`);
