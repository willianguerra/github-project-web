import axios from 'axios';
export const api = axios.create({
  baseURL: process.env.REACT_APP_BACK_END_URL,
});

export const ApiAuth = axios.create({
  baseURL: "http://localhost:3333",
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
}); 