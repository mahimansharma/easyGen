import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const signup = async (name: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/signup`, { name, email, password });
  localStorage.setItem('token', response.data.token); 
  return response;
};

export const signin = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/signin`, { email, password });
  localStorage.setItem('token', response.data.token); 
  return response;
};

export const logout = () => {
  localStorage.removeItem('token'); 
};
