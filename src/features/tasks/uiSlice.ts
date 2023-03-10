import { createSlice } from '@reduxjs/toolkit';

interface remarkState {
  remarkIsShown: boolean;
  notificationIsShown: boolean;
}

const initialState: remarkState = {
  remarkIsShown: false,
  notificationIsShown: false
}

export const uiSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleRemarkState: (state) => {
      state.remarkIsShown = !state.remarkIsShown
    },
    toggleNotification: (state) => {
      state.notificationIsShown = !state.notificationIsShown
    }
  },
})


export const { toggleRemarkState, toggleNotification } = uiSlice.actions;


export default uiSlice.reducer;
