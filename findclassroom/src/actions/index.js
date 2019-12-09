import axios from 'axios';
import { AUTH_SIGN_UP, AUTH_SIGN_OUT, AUTH_ERROR } from './types';

/*
  ActionCreators -> create/return Actions ({ }) -> dispatched -> middlewares -> reducers
*/

export const oauthGoogle = data => {
  return async dispatch => {
    const res = await axios.post('http://localhost:5000/user/oauth/google', {
      access_token: data
    });

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });

    localStorage.setItem('JWT_TOKEN', res.data.token);
  };
}

export const oauthFacebook = data => {
  return async dispatch => {
    const res = await axios.post('http://localhost:5000/user/oauth/facebook', {
      access_token: data
    });

    dispatch({
      type: AUTH_SIGN_UP,
      payload: res.data.token
    });

    localStorage.setItem('JWT_TOKEN', res.data.token);
  };
}

export const signUp = data => {
  /*
      Step 1) Use the data and to make HTTP request to our BE and send it along [X]
      Step 2) Take the BE's response (jwtToken is here now!) [X]
      Step 3) Dispatch 'user just signed up' (with jwtToken) [X]
      Step 4) Save the jwtToken into our localStorage [X]
  */
  return async dispatch => {
    try {
      console.log('[ActionCreator] signUp called!')
      const res = await axios.post('http://localhost:5000/user/signup', data);

      console.log('[ActionCreator] signUp dispatched an action!')
      dispatch({
        type: AUTH_SIGN_UP,
        payload: res.data.token
      });

      localStorage.setItem('JWT_TOKEN', res.data.token);
    } catch(err) {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Email is already in use'
      })
    }
  };
}

export const signOut = () => {
  return dispatch => {
    localStorage.removeItem('JWT_TOKEN');

    dispatch({
      type: AUTH_SIGN_OUT,
      payload: ''
    })
  };
}