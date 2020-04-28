import app from "firebase/app";
import "firebase/auth";
import "@firebase/storage";
import "@firebase/firestore";
import 'firebase/functions';

// Configure Firebase.

const config = {
  apiKey: "AIzaSyBmkBO01ekOoNJDJW6lPzQ3B1bElydQ3G8",
  authDomain: "global-forex-investment-cf594.firebaseapp.com",
  databaseURL: "https://global-forex-investment-cf594.firebaseio.com",
  projectId: "global-forex-investment-cf594",
  storageBucket: "global-forex-investment-cf594.appspot.com",
  messagingSenderId: "898982758562",
  appId: "1:898982758562:web:f5b132b83a84989a88affb",
  measurementId: "G-5ELDX4BVC8"
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


