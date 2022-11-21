import httpRequest from '../utils/httpRequest';

const login = (user) => {
  return httpRequest.post('/auth/login', user);
};

const logout = () => {
  localStorage.removeItem('user');
};

export { login, logout };
