import { createSelector } from "reselect";


const getUser = ({ user }) => user;
const getLogin = ({ login }) => login;
const getSignUp = ({ signUp }) => signUp;
const getMessage = ({ message }) => message;
const getDialog = ({ dialog }) => dialog;
const getError = ({ error }) => error;


export const getUserState = createSelector([getUser], user => user);
export const getLoginState = createSelector([getLogin], login => login);
export const getSignUpState = createSelector([getSignUp], signUp => signUp);
export const getMessageState = createSelector([getMessage], message => message);
export const getDialogState = createSelector([getDialog], dialog => dialog)
export const getErrorState = createSelector([getError], error => error)