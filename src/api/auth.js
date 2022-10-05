import axios from './axios';

const userLogin = (email, password) => {
  return axios
    .post('/login', {
      email: email,
      password: password,
    })
    .then(
      (res) => res,
      (error) => error.response
    );
};

const userRegistration = (username, email, password) => {
  return axios
    .post(`/register`, {
      name: username,
      email: email,
      password: password,
    })
    .then(
      (res) => res,
      (error) => error.response
    );
};

const userLogout = () => {
  return axios.get('/logout').then(
    (res) => res,
    (error) => error.response
  );
};

export { userLogin, userRegistration, userLogout };
