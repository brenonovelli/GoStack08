import axios from 'axios';

// const tokenGit = 'Bearer GERE-UM-TOKEN';

const api = axios.create({
  baseURL: 'https://api.github.com',
  // headers: { Authorization: tokenGit },
});

export default api;
