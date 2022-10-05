import { makeAutoObservable } from 'mobx';

class todoStore {
  todoList = [];

  constructor() {
    makeAutoObservable(this);
  }
  setTodoList = (data) => {
    this.todoList = data;
  };
}
export default todoStore;
