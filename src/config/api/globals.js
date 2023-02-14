export default {
  BASE_URL: __DEV__
    ? 'https://gateway.arvofinance.com/' //'http://ec2-52-200-46-243.compute-1.amazonaws.com:2020/'
    : 'https://gateway.arvofinance.com/', // 'https://stagging.v2.arvofinance.com/', //https://gateway.arvofinance.com/',
  DEBUG_MODE: __DEV__ ? true : false,
  BASE_API_LOG: __DEV__
    ? 'http://ec2-52-200-46-243.compute-1.amazonaws.com:2028/'
    : 'https://ec2-52-200-46-243.compute-1.amazonaws.com:2028/',
  CONTENT_TYPE: 'application/x-www-form-urlencoded',
  ONE_SIGNAL_APP_ID: 'b96d0eb9-d786-445c-9651-8b56da67f985',
};

// http://10.0.2.2:8000 http://157.230.228.124:2020/' 'https://gateway.arvofinance.com/'
