import Moment from 'moment';
import GLOBALS from '../api/globals';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOG_API_ERROR} from '../api/http';

export const SaveToken = async (token, expireInMinutes) => {
  const tokenKey = ['token', JSON.stringify(token)];
  const now = new Date();
  let expireTime = new Date(now);
  const expireAtKey = [
    'expireAt',
    JSON.stringify(expireTime.setMinutes(now.getMinutes() + expireInMinutes)),
  ];

  try {
    await AsyncStorage.multiSet([tokenKey, expireAtKey]);
  } catch (e) {
    console.log('Multiset err', e);
  }
};

export const RefreshSession = async expireInMinutes => {
  const now = new Date();
  let expireTime = new Date(now);
  let sessionTime = JSON.stringify(
    expireTime.setMinutes(now.getMinutes() + expireInMinutes),
  );
  await SaveToStorage('expireAt', sessionTime);
};

export const SaveToStorage = async (index, value) => {
  if (!index || !value) {
    //console.log('storage parameters cannot be null');
    return false;
  }
  try {
    await AsyncStorage.setItem(index, JSON.stringify(value));
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const GetDataFromStorage = async index => {
  let value = null;
  if (!index) {
    //console.log('storage parameters cannot be null');
    return value;
  }
  try {
    value = JSON.parse(await AsyncStorage.getItem(index));
  } catch (e) {
    console.log(e);
    // error reading value
  }
  return value;
};

export const DeleteDataFromStorage = async index => {
  let value = null;
  if (!index) {
    return value;
  }
  try {
    value = await AsyncStorage.removeItem(index);
  } catch (e) {
    // error reading value
  }
  return value;
};

export const ClearAllFromStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // error reading value
  }
};

export function FormatNumber(numb, fixed) {
  var decimalPart;
  let num = Number(numb);

  var array = Math.ceil(num).toString().split('');
  var index = -3;
  while (array.length + index > 0) {
    array.splice(index, 0, ',');
    index -= 4;
  }

  if (fixed > 0) {
    decimalPart = num.toFixed(fixed).split('.')[1];
    return array.join('') + '.' + decimalPart;
  }
  return array.join('');
}

export function UpperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function LowerCaseFirst(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function FormatDaysAgo(datetime) {
  if (datetime != null) {
    let dateAdjusted = datetime.replace(' ', 'T');
    let theDate = new Date(dateAdjusted);
    return Moment(theDate, 'YYYYMMDD').fromNow();
  }
  return datetime;
}

export function FormatDate(dateTime) {
  if (dateTime != null) {
    let theDate = Moment(new Date(dateTime));
    return theDate.format('Do MMM Y');
  }
  return dateTime;
}

export function FormatTypedAmount(value) {
  if (!value) {
    //setAmount('0');
    return '0';
  }
  var number = value.replace(/,/g, '');
  if (isNaN(number)) {
    return 'NaN';
  }
  let formattedNumber = Number.parseInt(number).toLocaleString('en-GB');
  //setAmount(formattedNumber);
  return formattedNumber;
}

export function TruncateText(text, textLength = 80) {
  return text.length > textLength ? `${text.substr(0, textLength)}...` : text;
}

export function OnApiError(responseData) {
  let msg;
  if (responseData?.message) {
    msg = responseData.message;
  } else {
    if (responseData.includes('/>')) {
      msg = GLOBALS.DEBUG_MODE
        ? JSON.stringify(responseData)
        : "Sorry it's us, not you. Please try again";
    } else {
      msg = JSON.stringify(responseData);
    }
  }

  return msg;
}

export const RemoteApiErrorLog = async errorData => {
  try {
    const user = await GetDataFromStorage('user');
    const userDevice = await GetDataFromStorage('userDevice');

    var name = null;
    var phoneNumber = null;
    var deviceApiLevel = 0;
    var appVersion = '0.0.0';
    var deviceType = 'others';
    if (user) {
      name = user.customer.firstName + ' ' + user.customer.lastName;
      phoneNumber = user.customer.phoneNumber;
    }
    if (userDevice) {
      appVersion = userDevice.appVersion;
      deviceApiLevel = userDevice.apiLevel || 0;
      deviceType = userDevice.operatingSystem
        ? userDevice.operatingSystem === 'Android'
          ? 'android'
          : 'ios'
        : 'others';
    }

    const msg = errorData?.response?.data?.message
      ? errorData.response.data.message
      : JSON.stringify(errorData);
    const errorInput = {
      appVersion,
      deviceType,
      name: name,
      phoneNumber,
      message: msg,
      deviceApiLevel,
      type: 'customer',
      category: 'MOBILE-APP',
      endpoint: errorData.config.url,
      email: user ? user.email : null,
      method: errorData.config.method,
      customerId: user ? user.customer.id : null,
      requestBody: errorData.config.data,
      errorStack: JSON.stringify(errorData),
    };
    if (!GLOBALS.DEBUG_MODE) {
      let k = await LOG_API_ERROR(errorInput);
      console.log('DDDDD', k);
    }
    return msg;
  } catch (e) {
    console.log('NNN', e);
    return 'Something got broken with logs! Try again';
  }
};

export const SessionManager = async (calledAppContainer = false) => {
  const data = {};
  const now = new Date();
  const sessionTime = await GetDataFromStorage('expireAt');
  const token = await GetDataFromStorage('token');

  let timeNow = now.getTime();

  if (timeNow > sessionTime || token === null) {
    await DeleteDataFromStorage('token');
    await DeleteDataFromStorage('expireAt');
    if (sessionTime) {
      data.code = 1;
      data.route = 'AuthStack';
      data.message = 'Session expired! Kindly login to continue';
      return data;
    } else {
      data.code = 2;
      data.route = 'OnBoard';
      data.message = 'Session expired! Login to continue';
      return data;
    }
  } else {
    data.code = 3;
    data.route = 'DashboardTab';
    return data;
  }
};

export const stripNumber = val => {
  let no = val;
  if (val?.includes('+234')) {
    const temp = val?.split('+234');
    no = `0${temp[1]}`;
  }
  if (val?.includes('234')) {
    const temp = val?.split('234');
    no = `0${temp[1]}`;
  }
  return no;
};
