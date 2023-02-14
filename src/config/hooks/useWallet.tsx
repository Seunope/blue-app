// import {useQuery} from 'react-query';
// import {FIND_WALLET_BALANCE, GET_CUSTOMER_TRANSACTIONS} from '../api/http';

// export const useWalletBalance = (onSuccess?: any, onError?: any) => {
//   return useQuery(['wallet-balance'], FIND_WALLET_BALANCE, {
//     onSuccess,
//     onError,
//   });
// };

// export const useTransactions = (onSuccess?: any, onError?: any) => {
//   return useQuery(
//     ['transactions'],
//     () => GET_CUSTOMER_TRANSACTIONS({limit: 5}),
//     {
//       onSuccess,
//       onError,
//     },
//   );
// };
