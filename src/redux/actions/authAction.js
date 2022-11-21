import { login } from '../../services/authService';
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS } from './types';

export const loginAccount = (user) => {
  return (dispatch, getState) => {
    dispatch(loginAccountRequest());
    try {
      login(user)
        .then((res) => {
          if (res.data.token) {
            localStorage.setItem('user', JSON.stringify(res.data));
          }
          dispatch(loginAccountSuccess(res));
        })
        .catch((e) => {
          dispatch(loginAccountError(e));
        });
    } catch (e) {
      dispatch(loginAccountError(e));
    }
  };
};

export const loginAccountRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginAccountSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginAccountError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
