import { login } from '../../services/authService';
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from './types';

export const loginAccount = (user) => {
  return async (dispatch, getState) => {
    dispatch(loginAccountRequest());
    try {
      login(user)
        .then((res) => {
          console.log(res);
          console.log(res.status);
          const data = res && res?.data ? res.data : [];
          if (res.data.token) {
            localStorage.setItem('user', JSON.stringify(res.data));
          }
          dispatch(loginAccountSuccess(res));
        })
        .catch((e) => {
          console.log(e.response);
          // console.log('Loi: ' + e);
          dispatch(loginAccountError(e));
        });
    } catch (e) {
      console.log('Loi: ' + e);
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
