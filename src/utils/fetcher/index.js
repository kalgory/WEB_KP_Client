import axios from 'axios';

const fetcher = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://localhost:8080',
});

export default fetcher;
