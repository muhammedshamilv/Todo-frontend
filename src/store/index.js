import { createContext, useContext } from 'react';
import UserStore from './userStore';
import TodoStore from './todoStore';

const userStore = new UserStore();
const todoStore = new TodoStore();

export const store = {
  userStore,
  todoStore,
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
