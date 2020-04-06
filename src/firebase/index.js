import app from "firebase/app";
import "firebase/auth";
import "@firebase/storage";
import "@firebase/firestore";
import 'firebase/functions';

// Configure Firebase.

const config = {
  apiKey: "AIzaSyAgeeAzdZVUDpnjaByuA2lMIIXOrD39Am4",
  authDomain: "eapay-12ae3.firebaseapp.com",
  databaseURL: "https://eapay-12ae3.firebaseio.com",
  projectId: "eapay-12ae3",
  storageBucket: "eapay-12ae3.appspot.com",
  messagingSenderId: "56553798143",
  appId: "1:56553798143:web:179bfd37815953acd38fca"
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


export var onPayment = functionHttps.httpsCallable('onPayment')
export var onEmail = functionHttps.httpsCallable('sendUserMail')
