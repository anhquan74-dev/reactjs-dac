import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actions/types';

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;
    case LOGIN_SUCCESS:
      return state;
    case LOGIN_ERROR:
      return state;
    default:
      return state;
  }
};

export default authReducer;
