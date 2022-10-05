import axios from './axios';

const AddTodo = (userId, description, title) => {
  return axios
    .post(`/${userId}/todo/create`, {
      description: description,
      userId: userId,
      title: title,
    })
    .then(
      (res) => res,
      (error) => error.response
    );
};

const ListTodo = (userId) => {
  return axios.get(`/${userId}/all/todos`).then(
    (res) => res,
    (error) => error.response
  );
};

export { AddTodo, ListTodo };
