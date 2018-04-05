import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_FETCH_SUCCESS } from './types';


export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  }
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return async (dispatch) => {
    await firebase.database().ref(`/users/${currentUser.uid}/employees`).push({ name, phone, shift });

    dispatch({
      type: EMPLOYEE_CREATE
    });

    Actions.pop();
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return async (dispatch) => {
    const reference = await firebase.database().ref(`/users/${currentUser.uid}/employees`);
    reference.on('value', snapshot => {
      dispatch({
        type: EMPLOYEES_FETCH_SUCCESS,
        payload: snapshot.val()
      });
    });
  };
};


// snapshot is an object that describes the date in the queried location.
// to get access to the actual data snapshot.val must be referenced.  (snapshot can be named whatever obviously)
