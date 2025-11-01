import { createSlice } from '@reduxjs/toolkit';
import { IloggedUser, Theme } from '../types/types';

export interface State {
  loggedUser: IloggedUser | null;
  theme: Theme;
}

const initialState: State = {
  // By default, a loggedUser should be null because the user is not yet logged in.
  loggedUser: null,
  theme: '',
};

export const Slice = createSlice({
  name: 'Slice',
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoggedUser, setTheme } = Slice.actions;

export default Slice.reducer;
