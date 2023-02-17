import axios from 'axios';

axios.interceptors.request.use(async config => {
  if (config) {
    config.timeout = 10000;
    config.headers['X-SERVICE-ID'] = 'BLUE-APP';
    // if (token) {
    //   // console.log('i was in token');
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
  }
  return config;
});

export const GetFunc = path => {
  return new Promise((resolve, reject) => {
    axios
      .get(path)
      .then(({data}) => {
        return resolve(data);
      })
      .catch(async ({...error}) => {
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
        return error?.response
          ? reject(error.response?.data || 'Unable to resolve host')
          : reject('Network error');
      });
  });
};
