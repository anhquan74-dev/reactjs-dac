import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

const login = (user) => {
  return axios.post(`${API_URL}/login`, user);
};

const logout = () => {
  localStorage.removeItem('user');
};

export { login, logout };
