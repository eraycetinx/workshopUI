import { configureStore } from '@reduxjs/toolkit';
import { loggedUser } from './slices';

// For any help:
// https://redux-toolkit.js.org/tutorials/quick-start

export const store = configureStore({
  reducer: {
    loggedUser,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
