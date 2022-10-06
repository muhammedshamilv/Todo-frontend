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

const SelectTodo = (noteId) => {
  return axios.get(`/todos/${noteId}`).then(
    (res) => res,
    (error) => error.response
  );
};

const EditTodo = (noteId, description, title) => {
  return axios
    .put(`/todos/${noteId}/update`, {
      description: description,
      title: title,
    })
    .then(
      (res) => res,
      (error) => error.response
    );
};

const DeleteTodo = (noteId) => {
  return axios.delete(`/todos/${noteId}`).then(
    (res) => res,
    (error) => error.response
  );
};

export { AddTodo, ListTodo, SelectTodo, EditTodo, DeleteTodo };
