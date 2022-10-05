import { makeAutoObservable } from 'mobx';

class userStore {
  user = [];

  constructor() {
    makeAutoObservable(this);
  }
  setUser = (data) => {
    this.user = data;
    localStorage.setItem('user', JSON.stringify(this.user));
  };
}
export default userStore;
