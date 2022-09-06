import axios from './axios';

const userLogin = (email, password) => {
  return axios.post('/login', {
    email: email,
    password: password,
  });
};

const userRegistration = (username, email, password) => {
  return axios.post(`/register`, {
    name: username,
    email: email,
    password: password,
  });
};

export { userLogin, userRegistration };
