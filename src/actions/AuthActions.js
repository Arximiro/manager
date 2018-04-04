import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text
});

export const loginUser = ({ email, password }) => {
  let user = null;

  return async (dispatch) => {
    dispatch({ type: LOGIN_USER });

    try {
      user = await firebase.auth().signInWithEmailAndPassword(email, password);
      loginSuccess(dispatch, user);
    } catch (e) {
      try {
        user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        loginSuccess(dispatch, user);
      } catch (e) {
        dispatch({ type: LOGIN_USER_FAIL });
      }
    }
  };
};

const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
}
