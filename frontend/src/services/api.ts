import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getApplications = async () => {
  const response = await api.get('/apps');
  return response.data;
};

export const getMetrics = async (appId: number) => {
  const response = await api.get(`/${appId}/metrics`);
  return response.data;
};

export default api;
