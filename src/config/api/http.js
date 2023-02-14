import GLOBALS from './globals';
import {
  SaveToken,
  SaveToStorage,
  GetDataFromStorage,
} from '../../config/utils/utils';
import {
  GetFunc,
  PutFunc,
  PostFunc,
  PostFunc2,
  PatchFunc,
  DelFunc,
} from './http_mthd';

// API calls
export const CREATE_ACCOUNT = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const LOGIN_ACCOUNT = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/signin`;
  let response;
  try {
    response = await PostFunc(url, data);
    if (response && response.status) {
      await SaveToken(response.meta.token, 27);
      await SaveToStorage('user', response.data);
      await SaveToStorage('secretKey', response.meta.secretKey);
    }
  } catch (error) {
    response = error;
  }
  return response;
};

export const VERIFY_PHONE_NUMBER = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/ivs/verify-phone/${data.phoneNumber}`;
  let response;
  try {
    response = await PostFunc(url, data);
    if (response && response.status) {
      await SaveToken(response.meta.token, 27);
      await SaveToStorage('user', response.data);
      await SaveToStorage('secretKey', response.meta.secretKey);
    }
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_NEW_OTP = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/generate-otp/${data.phoneNumber}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const CREATE_USER_DEVICE = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/device-record`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const PATCH_USER_DEVICE = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/device-record/${data.deviceId}`;
  let response;
  try {
    response = await PutFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const FORGOT_PASSWORD = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/password/${data.phoneNumber}`;
  let response;
  try {
    response = await PutFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const UPDATE_PERSONAL_INFORMATION = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/personal-information`;
  let response;
  try {
    response = await PostFunc(url, data);
    if (response && response.status) {
      await SaveToStorage('user', response.data);
    }
  } catch (error) {
    response = error;
  }
  return response;
};

export const CUSTOMER_PROFILE = async () => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/profile`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const INITIATE_EMAIL_VERIFICATION = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/ivs/verify-email`;
  let response;
  try {
    response = await PostFunc(url, data);
    await SaveToStorage('secretKey', response.meta.secretKey);
  } catch (error) {
    response = error;
  }
  return response;
};

export const VERIFY_EMAIL = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/ivs/verify-email?email=${data.email}`;
  let response;
  try {
    response = await PutFunc(url, data);
    if (response && response.status) {
      await SaveToken(response.meta.token, 27);
      await SaveToStorage('user', response.data);
      await SaveToStorage('secretKey', response.meta.secretKey);
    }
  } catch (error) {
    response = error;
  }
  return response;
};

export const VERIFY_BVN = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/ivs/verify-bvn`;
  let response;
  try {
    response = await PostFunc(url, data);
    if (response && response.status) {
      await SaveToken(response.meta.token, 27);
      await SaveToStorage('user', response.data);
      await SaveToStorage('secretKey', response.meta.secretKey);
    }
  } catch (error) {
    response = error;
  }
  return response;
};

export const ADD_EMPLOYMENT = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/employment-record`;
  let response;
  try {
    response = await PostFunc(url, data);
    if (response && response.status) {
      await SaveToStorage('user', response.data);
    }
  } catch (error) {
    response = error;
  }
  return response;
};

export const UPDATE_EMPLOYMENT = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/employment-record/${data.employmentId}`;
  let response;
  try {
    response = await PutFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const UPLOAD_PASSPORT = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/add-customer-image`;
  let response;
  try {
    response = await PostFunc(url, data);
    if (response && response.status) {
      await SaveToStorage('user', response.data);
    }
  } catch (error) {
    response = error;
  }
  return response;
};

export const CREATE_PIN = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/pin`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const FUND_WITH_CARD = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/wallets/fund`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const CUSTOMER_LOAN_QUALIFICATION = async () => {
  const url = `${GLOBALS.BASE_URL}loan/v1/verifications`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const LOAN_VERIFICATION = async data => {
  let url;
  let response;
  switch (data.loanType) {
    case 'remita':
      url = `${GLOBALS.BASE_URL}loan/v1/verifications/remita`;
      break;
    case 'ippis':
      url = `${GLOBALS.BASE_URL}loan/v1/verifications/ippis`;
      break;
    case 'staff':
      url = `${GLOBALS.BASE_URL}loan/v1/verifications/staff`;
      break;
    default:
      url = `${GLOBALS.BASE_URL}loan/v1/verifications/fast-cash`;
      break;
  }
  console.log('url', url);
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const CREATE_NEW_LOAN = async data => {
  const url = `${GLOBALS.BASE_URL}loan/v1/loans`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_ALL_CARDS = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/cards?purpose=${data.purpose}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const CUSTOMER_LOAN_DECISION = async data => {
  const url = `${GLOBALS.BASE_URL}loan/v1/loans/user/${data.loanId}/${data.status}`;
  console.log(url);
  let response;
  try {
    response = await PutFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const LOAN_OFFER = async () => {
  const url = `${GLOBALS.BASE_URL}loan/v1/loans/offer`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_MY_LOAN_STATUS = async () => {
  const url = `${GLOBALS.BASE_URL}loan/v1/loans/my-loan`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const RESOLVE_BANK_ACCOUNT = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/wallets/resolve/account/${data.accountNumber}/${data.bankCode}`;
  console.log(url);
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const ADD_IPPIS_CUSTOMER = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/ippis-customer`;
  let response;
  try {
    response = await PostFunc(url, data);
    await SaveToken(response.meta.token, 27);
  } catch (error) {
    response = error;
  }
  return response;
};

export const FIND_WALLET_BALANCE = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/wallets`;
  let response;
  try {
    response = await GetFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const ADD_CARD = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/cards`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_ALL_BENEFICIARY = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/beneficiary?type=${data}`;
  // const url = `${GLOBALS.BASE_URL}wallet/v1/beneficiary`;
  let response;
  try {
    response = await GetFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const ADD_BENEFICIARY = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/beneficiary?type=${data}`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const CARD_REPAYMENT = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/wallets/in-app-repayment`;
  let response;
  try {
    if (data.type === 'newCard') {
      response = await PostFunc(url, data);
    } else if (data.type === 'oldCard') {
      response = await PatchFunc(url, data);
    } else if (data.type === 'wallet') {
      response = await PutFunc(url, data);
    }
  } catch (error) {
    response = error;
  }
  return response;
};

export const DELETE_BENEFICIATY = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/beneficiary/:${data.beneficiaryId}`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_LOAN_HISTORY = async () => {
  const url = `${GLOBALS.BASE_URL}loan/v1/loans?newIdx=1&limit=10`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

// Transaction Api

export const GET_CUSTOMER_TRANSACTIONS = async data => {
  const url = `${
    GLOBALS.BASE_URL
  }wallet/v1/transactions/customer-transaction/${1}/${data}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const UPDATE_PERSONAL_PROFILE = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/personal-information`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const SAVE_CONTACT_LIST = async data => {
  const url = `${GLOBALS.BASE_URL}stats/v1/contacts`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const REFRESH_TOKEN = async () => {
  const url = `${GLOBALS.BASE_URL}auth/refresh`;
  const token = await GetDataFromStorage('token');
  let response;
  try {
    response = await PutFunc(url, {token});
    await SaveToken(response.meta.token, 15);
  } catch (error) {
    response = error;
  }
  return response;
};

// Bills

export const INITIATE_PAYMENT = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/bill`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const RETRIEVE_ALL_BILLS = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/bill?category=${data}`;
  let response;
  try {
    response = await GetFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const SEND_MONEY = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/wallets/send-money`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const VERIFY_BILLS = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/bill/bap/verify`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_CUSTOMER_TRANSACTION_BY_ID = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/transactions/${data}`;
  let response;
  try {
    response = await GetFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const RESET_PASSWORD = async data => {
  const url = `${GLOBALS.BASE_URL}user/v1/customer/password/${data?.phoneNumber}`;
  let response;
  try {
    response = await PostFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};
export const GET_BANKCODE_SEARCH = async (data = '') => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/wallets/bank-data?filter=${data}`;
  let response;
  try {
    response = await GetFunc(url);
    console.log(response, 'response');
  } catch (error) {
    response = error;
  }
  return response;
};

export const LOG_API_ERROR = async data => {
  const url = `${GLOBALS.BASE_API_LOG}stats/v1/logs`;
  let response;
  try {
    response = await PostFunc2(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_NOTIFICATIONS = async data => {
  const url = `${GLOBALS.BASE_URL}stats/v1/notification?limit=10&cursor=${data.skip}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_REPAYMENTS_HISTORY = async data => {
  const url = `${GLOBALS.BASE_URL}loan/v1/repayment?limit=10&newIdx=1`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const GET_FAQ = async () => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/stats/faq}`;
  let response;
  try {
    response = await GetFunc(url);
  } catch (error) {
    response = error;
  }
  return response;
};

export const SET_DEFAULT_CARD = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/cards/set-default/${data.cardId}`;
  console.log('URL', url);
  let response;
  try {
    response = await PutFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};

export const DELETE_CARD = async data => {
  const url = `${GLOBALS.BASE_URL}wallet/v1/cards/${data.cardId}`;
  let response;
  try {
    response = await DelFunc(url, data);
  } catch (error) {
    response = error;
  }
  return response;
};
