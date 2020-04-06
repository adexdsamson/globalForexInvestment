/* eslint-disable default-case */
import { EventEmitter } from "events";
import dispatcher from "./dispatcher";

class UserStore extends EventEmitter {
  constructor() {
    super();
    this.user = {
      
    };
  }
  addUser(user) {
    this.user = {
      name: user.name,
      email: user.email,
      photoUrl: user.img,
      emailVerified: user.emailVerified,
      id: user.id
    };
    this.emit("change");
  }
  getUser() {
    return this.user;
  }

  handleAction(action) {
    switch (action.type) {
      case "USER": 
        this.addUser(action.payload);
      break;
      default:
        break;
    }
  }

  isLoggedIn(){
    return !!this.user;
  }
}

const userStore = new UserStore();
dispatcher.register(userStore.handleAction.bind(userStore));

export default userStore;
