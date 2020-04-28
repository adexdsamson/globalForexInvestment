import { USER, LOGIN_STATE, SIGN_UP, LOGOUT, ERROR } from './constant';
import { createUser, signIn, updateUser, addDoc, doSignOut } from "../firebase";
import { auth } from 'firebase';


const User = (data) => ({
  type: USER,
  payload: data
});

const onError = data => ({
  type: ERROR,
  payload: data
})


export const signUp = (data, update) => (dispatch) => {
  const SIGNUP = createUser(data.email, data.password);
  SIGNUP.then(user => {
    updateUser(update).then(() => {
        dispatch(User({
          name: update.name,
          email: user.user.email,
          img: update.imageURL,
          emailVerified: user.user.emailVerified,
          id: user.user.uid
        }));
        addDoc({
        accountNumber: data.accNum,
        bank: data.bank,
        address: data.address,
        imgURL: data.img,
        id: user.user.uid
      });
      dispatch({ type: SIGN_UP})
    })
  })
};


export const login = (email, password) => (dispatch) => {
  const login = signIn(email, password);
  login.then(res => {
    dispatch(User({
      name: res.user.displayName,
      email: res.user.email,
      img: res.user.photoURL,
      emailVerified: res.user.emailVerified,
      id: res.user.uid
    }));
    dispatch({ type: LOGIN_STATE })
  })
  .catch(e => dispatch(onError(e.message)));
};

export const login_state = () => dispatch => {
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch(User({
        name: user.displayName,
        email: user.email,
        img: user.photoURL,
        emailVerified: user.emailVerified,
        id: user.uid
      }));
    }
  })
}


export const logOut = () => (dispatch) => {
  doSignOut().then(() => {
    dispatch({ type: LOGOUT});
  }).catch(e => e);
};