import axios from './axios';

export const AddTodo = (userId, description, title) => {
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
