import dispatcher from '../../store/dispatcher';

export function addUser(user) {
  dispatcher.dispatch({
    type: "USER",
    payload: user
  })
}