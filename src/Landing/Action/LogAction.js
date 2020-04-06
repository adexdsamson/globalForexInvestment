import UserStore from '../../store';


export default {
  log: (action) => {
    console.log('Action:', action);
  },
  debugSession: (session, untilAction) => {
    console.log('Debugging session:', session);

    dispatch({debug: true, })
  }
}