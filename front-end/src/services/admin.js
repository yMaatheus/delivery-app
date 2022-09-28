import api from './api';

export const getAll = () => api.get('/admin/users');

export const create = (data) => api.post('/admin/users', {
  ...data, role: 'administrator',
});
