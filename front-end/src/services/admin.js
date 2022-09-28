import api from './api';

<<<<<<< HEAD
export const getAllUsers = () => api.get('/admin/users');

export const createUser = (data) => api.post('/admin/users', {
=======
export const getAll = () => api.get('/admin/users');

export const create = (data) => api.post('/admin/users', {
>>>>>>> feat: :sparkles: add screen admin and components user list and user form
  ...data, role: 'administrator',
});
