import { makeAutoObservable } from 'mobx';

class userStore {
  user = [];

  constructor() {
    makeAutoObservable(this);
  }
  setUser = (data) => {
    this.user = data;
    console.log('userdon', this.user);
  };
}
export default userStore;
