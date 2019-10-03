import axios from 'axios';

const tokenGit = 'Bearer d2151d2e3da86ae9058b6402a18a84e63d29ea45';

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: { Authorization: tokenGit },
});

export default api;
