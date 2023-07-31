import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseType } from '../../types';

  const initialState: ResponseType = {
    items: [],
    total_count: 0
  };

  const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
      loadCards(_state, action: PayloadAction<ResponseType>) {
        return {
            total_count: action.payload.total_count,
            items: action.payload.items,
        };
      },
      loadMore(state, action: PayloadAction<ResponseType>) {
        return {
            total_count: action.payload.total_count,
            items: [...state.items, ...action.payload.items],
        }
      },
    },
  });
  
const { loadCards, loadMore } = cardsSlice.actions;

const cardsReducer = cardsSlice.reducer;

export {
    loadCards,
    loadMore,
    cardsReducer
};