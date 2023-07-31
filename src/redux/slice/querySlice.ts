import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QueryType } from '../../types';

  const initialState: QueryType = {
    q: '',
    sort: 'repositories',
    order: 'desc',
    per_page: 6,
    page: 1
  };

  const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
      changeQuery(state, action: PayloadAction<Partial<QueryType>>) {
        return {...state, ...action.payload};
      },
      nextPage(state) {
        state.page++;
      },
      firstPage(state) {
        state.page = 1;
      }
    },
  });
  
const { changeQuery, nextPage, firstPage } = querySlice.actions;

const queryReducer = querySlice.reducer;

export {
    changeQuery,
    nextPage,
    firstPage,
    queryReducer,
};