import axios from 'axios';
import { QueryType } from '../types';

export const BASE_URL = 'https://api.github.com';

export const searchUsers = async (paramsObj: QueryType): Promise<any> => {
  return new Promise((resolve) => {
    resolve(axios.get(`${BASE_URL}/search/users`, {params: paramsObj }));
  })
}

export const getUser = async (nickname: string): Promise<any> => {
  return new Promise((resolve) => {
    resolve(axios.get(`${BASE_URL}/users/${nickname}`));
  })
}