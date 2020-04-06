import { createUser, signIn, updateUser, addDoc, doSignOut } from "../../firebase";
import { addUser } from "./index";
import { navigate } from "@reach/router";

class AuthService {
  signUp(data, update) {
    createUser(data.email, data.password)
      .then(user => {
        updateUser(update).then(() => {
          addUser({
            name: update.name,
            email: user.user.email,
            img: update.imageURL,
            emailVerified: user.user.emailVerified,
            id: user.user.uid
          });
          addDoc({
            accountNumber: data.accNum,
            bank: data.bank,
            address: data.address,
            imgURL: data.img,
            id: user.user.uid
          });
          navigate('/app/secured/home')
        });
      })
      .catch(e => console.log(("signUp_error", e)));
  }

  // login function
  login(email, password) {
    signIn(email, password)
      .then(res => {
        addUser({
          name: res.user.displayName,
          email: res.user.email,
          img: res.user.photoURL,
          emailVerified: res.user.emailVerified,
          id: res.user.uid
        });
        navigate('/app/secured/home')
      })
      .catch(err => console.log(err));
  }

  // logOut function
  logOut(){
    doSignOut().then(() => {
      addUser({ });
    }).catch(e => console.log(e))
  }
}

export default new AuthService();
