import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from './types';

export const loginAccount = (user) => {
  return async (dispatch, getState) => {
    dispatch(loginAccountRequest());
    try {
      
    } catch (e) {}
  };
};

export const loginAccountRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginAccountSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginAccountError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};
