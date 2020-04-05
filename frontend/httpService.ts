import axios from 'axios';

const getHeaders = () => {
  const userToken = localStorage.getItem('access-token');
  return {
    'access-token': userToken,
    'Content-Type': 'application/json'
  }
}
const setToken = (headers) => {
  if (headers['access-token']) {
    localStorage.setItem('access-token', headers['access-token']);
  } else {
    localStorage.removeItem('access-token');
  }
}

export const httpService = {
  get: async (url: string, params?: any) => {
    const result = await axios.get(url, {
      params,
      headers: getHeaders()
    });
    setToken(result.headers);
    return result;
  },
  post: async (url: string, params: any) => {
    const result = await axios.post(url, params, {
      headers: getHeaders()
    });
    setToken(result.headers);
    return result;
  },
  put: async (url: string, params: any) => {
    const result = await axios.put(url, params, {
      headers: getHeaders()
    });
    setToken(result.headers);
    return result;
  },
  delete: async (url: string, params: any) => {
    const result = await axios.delete(url, {
      headers: getHeaders()
    });    
    setToken(result.headers);
    return result;
  },
};