import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEES_SAVE_SUCCESS } from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };

    case EMPLOYEE_CREATE:
      return { ...state, ...initialState };

    case EMPLOYEES_SAVE_SUCCESS:
      return { ...state, ...initialState };

    default:
      return state;
  }
};
