import api from './api';

const addSale = (data) => api.post('/sales', { ...data });

export default addSale;
