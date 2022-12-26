import { createSlice } from '@reduxjs/toolkit';

interface remarkState {
  remarkIsShown: boolean;
}

const initialState: remarkState = {
  remarkIsShown: false,
}

export const uiSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleRemarkState: (state) => {
      state.remarkIsShown = !state.remarkIsShown
    }
  },
})


export const { toggleRemarkState } = uiSlice.actions;


export default uiSlice.reducer;
