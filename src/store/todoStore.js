import { makeAutoObservable } from 'mobx';

class todoStore {
  todoList = [];
  reload = false;
  show = false;
  noteDetails = {};
  btn = 'ADD';
  constructor() {
    makeAutoObservable(this);
  }
  setTodoList = (data) => {
    this.todoList = data;
  };
  setReload = (data) => {
    this.reload = data;
  };
  setShow = (data) => {
    this.show = data;
  };
  setNoteDetails = (data) => {
    this.noteDetails = data;
  };
  setBtn = (data) => {
    this.btn = data;
  };
}
export default todoStore;
