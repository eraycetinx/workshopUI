import { createSlice } from '@reduxjs/toolkit';
import { IloggedUser } from '../types/types';

export interface State {
  loggedUser: IloggedUser | null;
}

const initialState: State = {
  // By default, a loggedUser should be null because the user is not yet logged in.
  loggedUser: null,
};

export const Slice = createSlice({
  name: 'Slice',
  initialState,
  reducers: {
    loggedUser: (state, action) => {
      state.loggedUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loggedUser } = Slice.actions;

export default Slice.reducer;
