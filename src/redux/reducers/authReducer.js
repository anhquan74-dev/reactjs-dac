import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? {
      login: {
        user,
        isLoading: false,
        isError: false,
        isLoggedIn: true,
        status: 200,
      },
    }
  : {
      login: {
        user: null,
        isLoading: false,
        isError: false,
        isLoggedIn: false,
        status: null,
      },
    };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        login: {
          user: null,
          isLoading: true,
          isError: false,
          isLoggedIn: false,
          status: null,
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: {
          user: action.payload.data,
          isLoading: false,
          isError: false,
          isLoggedIn: true,
          status: action.payload.status,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        login: {
          user: null,
          isLoading: false,
          isError: true,
          isLoggedIn: false,
          status: action.payload.response.status,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
