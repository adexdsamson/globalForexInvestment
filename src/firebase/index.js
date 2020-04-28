import app from "firebase/app";
import "firebase/auth";
import "@firebase/storage";
import "@firebase/firestore";
import 'firebase/functions';

// Configure Firebase.

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

app.initializeApp(config);


export const auth = app.auth();
export const storageRef = app.storage().ref("images");
export const functionHttps = app.functions()

export let currentUser = auth.currentUser;

// Authentication functions

export const createUser = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () => auth.signOut();

const Userdatabase = app.firestore().collection("users");

export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

export const updateUser = update =>
  auth.currentUser.updateProfile({
    displayName: update.name,
    photoURL: update.imageURL
  });

export const addDoc = user => Userdatabase.doc(user.id).set(user);


export var onPayment = functionHttps.httpsCallable('chargeInvestment')


