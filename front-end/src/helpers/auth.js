export const getToken = () => localStorage.getItem('@token');

export const setToken = (token) => localStorage.setItem('@token', token);

export const setUserLocal = (user) => localStorage.setItem('user', JSON.stringify(user));

export const getUser = () => JSON.parse(localStorage.getItem('user'));

export const clearUser = () => localStorage.removeItem('user');

export const clearToken = () => localStorage.removeItem('@token');
