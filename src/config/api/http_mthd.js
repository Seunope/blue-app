import axios from 'axios';
import {GetDataFromStorage, RemoteApiErrorLog} from '../utils/utils';

axios.interceptors.request.use(async config => {
  if (config) {
    config.timeout = 10000;
    config.headers['X-SERVICE-ID'] = 'PERSONAL-APP';
    let token = await GetDataFromStorage('token');
    //console.log('token', token);
    if (token) {
      // console.log('i was in token');
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  // console.log('CONFIG', config);
  return config;
});

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('RESPONSE', response);
    if (response && response.message && response.message.includes('Session')) {
      console.log('session I was here');
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('ERROR', error);
    return Promise.reject(error);
  },
);

export const GetFunc = path => {
  return new Promise((resolve, reject) => {
    axios
      .get(path)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(async ({...error}) => {
        // console.log('Geterror', error.response);
        RemoteApiErrorLog(error);
        return error?.response
          ? reject(error.response?.data || 'Unable to resolve host')
          : reject('Network error');
      });
  });
};

export const DelFunc = path => {
  return new Promise((resolve, reject) => {
    axios
      .delete(path)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(({...error}) => {
        RemoteApiErrorLog(error);
        return error?.response
          ? reject(error.response?.data || 'Unable to resolve host')
          : reject('Network error');
      });
  });
};

export const PostFunc = (path, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(path, payload)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(({...error}) => {
        RemoteApiErrorLog(error);
        // console.log('Posterror', error);
        return error?.response
          ? reject(error.response?.data || 'Unable to resolve host')
          : reject('Network error');
      });
  });
};

export const PutFunc = (path, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .put(path, payload)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(({...error}) => {
        // console.log('Puterror', error);
        RemoteApiErrorLog(error);
        return error?.response
          ? reject(error.response?.data || 'Unable to resolve host')
          : reject('Network error');
      });
  });
};

export const PatchFunc = (path, payload) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(path, payload)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(({...error}) => {
        RemoteApiErrorLog(error);
        return error?.response
          ? reject(error.response?.data || 'Unable to resolve host')
          : reject('Network error');
      });
  });
};
