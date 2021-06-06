import { endpoints } from "../../Api/configs";
import types from "./actionTypes";

const setImage = (image) => {
  console.log('setImage action: ', image);
  return {type: types.SET_IMAGE, payload: image};
};

const signup = (data, callback, error) => {
    console.log('action called', data);
    return async (dispatch) => {
      dispatch({type: types.loaderOn});
      try {
        // const response = await api.post(endpoints.auth.signup, data, true);
        // console.log('signup action: ', response);
        // callback(response)
        dispatch({type: types.SIGN_UP, payload: data});
        setTimeout(() =>{ dispatch({type: types.loaderOff})}, 500)
        callback('signup successfull');
      } catch (e) {
        setTimeout(() =>{ dispatch({type: types.loaderOff})}, 500)
        error(e);
      }
    };
  };


const login = (data, callback) => {
  const newData = {...data, device_id: 'testtoken'};
  console.log('login action called', newData);
  return async (dispatch) => {
    dispatch({type: types.loaderOn});
    try {
      // const response = await api.post(endpoints.auth.login, newData, false);
      dispatch({type: types.LOGIN, payload: data}); //payload: response
      setTimeout(() =>{ dispatch({type: types.loaderOff})}, 500)
      return Promise.resolve('login successful'); //response
    } catch (e) {
      setTimeout(() =>{ dispatch({type: types.loaderOff})}, 500)
      console.log('error response action: ', e);
      return Promise.reject(e);
    }
  };
};
  
  

export const actions = {
    signup,
    login,
    setImage,
}