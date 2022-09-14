import { makeAutoObservable } from 'mobx';

class userStore {
  user = [];

  constructor() {
    makeAutoObservable(this);
  }
  setUser = (data) => {
    this.user = data;
    console.log('userdon', this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  };
}
export default userStore;
