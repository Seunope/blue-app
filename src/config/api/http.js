import GLOBALS from './globals';
import {GetFunc, PutFunc, PostFunc, PatchFunc, DelFunc} from './http_mthd';

// API calls
export const CREATE_ACCOUNT = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/create`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};
