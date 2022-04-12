import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {BASE_URL} from '../config';
import {createAction} from '../utils/createAction';
import {sleep} from '../utils/sleep';

export function useAuth() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      loading: true,
    },
  );
  const auth = React.useMemo(
    () => ({
      login: async data2 => {
        const {data} = await axios.post(`${BASE_URL}/api/login`, data2);
        const user = {
          email: data.data.email,
          token: data.data.token,
        };
        await AsyncStorage.setItem('user', JSON.stringify(user));
        dispatch(createAction('SET_USER', user));
        console.log(user);
      },
      logout: async () => {
        await AsyncStorage.removeItem('user');
        dispatch(createAction('REMOVE_USER'));
        console.log('sudah logout ya');
      },
      register: async data => {
        await sleep(2000);
        await axios.post(`${BASE_URL}/api/register-user`, data);
      },
    }),
    [],
  );
  React.useEffect(() => {
    sleep(2000).then(() => {
      AsyncStorage.getItem('user').then(user => {
        if (user) {
          dispatch(createAction('SET_USER', JSON.parse(user)));
        }
        dispatch(createAction('SET_LOADING', false));
      });
    });
  }, []);
  return {auth, state};
}
