import { makeAutoObservable } from "mobx";

interface IUser {
  username: string;
  email: string;
  id: string;
}

class UserStore {
  email: string | undefined | null;
  username: string | undefined | null;
  accessToken: string | undefined | null;
  id: string | undefined | null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: IUser) {
    this.username = user.username;
    this.email = user.email;
    this.id = user.id;
  }

  clearUser() {
    this.username = null;
    this.email = null;
    this.accessToken = null;
    this.id = null;
  }

  getUser() {
    return this;
  }

  setToken() {
    this.accessToken = localStorage.getItem("token");
  }
}

export const userStore = new UserStore();
