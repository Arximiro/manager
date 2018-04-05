import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from '../actions/types';

const initialState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = initialState, action) => {  
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: action.payload};

    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', loading: false };

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    default:
      return state;
  }
};

// for LOGIN_USER_SUCCESS case what is going on is first the current state is spread, then the initial state is spread, then user is added.
// The reason for this is because if a user logs in successfully, I want all the values in the state to go back to their default values.
// The reason state is spread, then initial state, is in case in the future I add something a new property onto the state that may not be part of the intial state.
// I may want that newly added part of the state to remain as is.

// So after the first spread a new object would be created that is an exact replica, to prevent mutation. Then after the initialstate spread I would have the next object.
// That would keep any new properties that weren't part of the initial state. Then finally the user would be added to that new state object.
// Let's say for this example that the initial state is {email: '', password: '', user: null}

// EXAMPLE OBJECTS IN ORDER
// {
//   email: joe@joeman.com,
//   password: 'potato',
//   user: null,
//   authToken: 91je91jalkdzdsuanjm
// }
// {
//   email: joe@joeman.com,
//   password: 'potato',
//   user: null,
//   authToken: 91je91jalkdzdsuanjm
// }
// {
//   email: '',
//   password: '',
//   user: null,
//   authToken: 91je91jalkdzdsuanjm
// }
// {
//   email: '',
//   password: '',
//   user: {userinfo...},
//   authToken: 91je91jalkdzdsuanjm
// }
