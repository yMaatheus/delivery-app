import api from './api';

export const getMe = () => api.get('/v1/me');

export const login = (data) => api.post('/v1/users/login', data);
