import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_REST_API_KEY
  }
});

export default instance;