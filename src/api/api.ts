import axios from 'axios';
import { QueryType } from '../types';

export const BASE_URL = 'https://api.github.com/search/users';

export const searchUsers = async (paramsObj: QueryType): Promise<any> => {
  return new Promise((resolve) => {
    resolve(axios.get(BASE_URL, {params: paramsObj }));
  })
}