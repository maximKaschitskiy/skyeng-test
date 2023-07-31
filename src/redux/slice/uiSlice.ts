import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiType } from '../../types';

  const initialState: UiType = {
    currentId: null,
    loading: false,
    query: '',
    option: '',
    popup: false,
    errMessage: '',
    errCode: ''
  };

  const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
      changeId(state, action: PayloadAction<UiType['currentId']>) {
        return {...state, currentId: action.payload};
      },
      changeLoad(state, action: PayloadAction<UiType['loading']>) {
        return {...state, loading: action.payload};
      },
      changeSearch(state, action: PayloadAction<UiType['query']>) {
        return {...state, query: action.payload};
      },
      changeOption(state, action: PayloadAction<UiType['option']>) {
        return {...state, option: action.payload};
      },
      errShow(state, action: PayloadAction<UiType>) {
        return {...state, popup: true, errMessage: action.payload.errMessage, errCode: action.payload.errCode};
      },
      errHide(state) {
        return {...state, popup: false};
      },
    },
  });
  
const { changeId, changeLoad, changeSearch, errShow, errHide } = uiSlice.actions;

const uiReducer = uiSlice.reducer;

export {
    changeId,
    changeLoad,
    changeSearch,
    errShow,
    errHide,
    uiReducer
};