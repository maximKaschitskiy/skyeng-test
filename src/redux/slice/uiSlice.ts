import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiType, User } from '../../types';

  const initialState: UiType = {
    currentId: null,
    loading: false,
    query: '',
    option: '',
    popup: false,
    popupSubtitle: '',
    popupTitle: '',
    popupContent: '',
    currentUser: null
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
      popupShow(state, action: PayloadAction<UiType>) {
        return {...state, popup: true, popupSubtitle: action.payload.popupSubtitle, popupTitle: action.payload.popupTitle, popupContent: action.payload.popupContent};
      },
      popupHide(state) {
        return {...state, popup: false, popupSubtitle: "", popupTitle: "", popupContent: ""};
      },
      setUser(state, action: PayloadAction<UiType['currentUser']>) {
        return {...state, currentUser: action.payload};
      }
    },
  });
  
const { changeId, changeLoad, changeSearch, popupShow, popupHide, setUser } = uiSlice.actions;

const uiReducer = uiSlice.reducer;

export {
    changeId,
    changeLoad,
    changeSearch,
    popupShow,
    popupHide,
    setUser,
    uiReducer
};