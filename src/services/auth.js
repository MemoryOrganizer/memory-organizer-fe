import { post, get } from './request';

export const signup = user => post('/api/v1/auth/signup', user);
export const login = user => post('/api/v1/auth/login', user);
export const verify = () => get('/api/v1/auth/verify');
// export const logout = () => get('/api/v1/users/logout');
