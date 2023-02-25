import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'assets/constants';
import { authInitState } from './authInitialState';
import { authLoginThunk, authLogoutThunk } from './authThunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  redusers: {
    logoutAction: () => authInitState,
  },
  extraReducers: builder =>
    builder
      .addCase(authLoginThunk.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.data = payload;
      })
      .addCase(authLoginThunk.rejected, state => {
        state.status = STATUS.rejected;
      })
      .addCase(authLogoutThunk.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(authLogoutThunk.fulfilled, (state) => {
        console.log('authLogoutThunk',state);
        state.status = STATUS.idle;
        state.data = null;
      })
      .addCase(authLogoutThunk.rejected, state => {
        state.status = STATUS.rejected;
      }),
});

export const authReduser = persistReducer(
  {
    key: 'auth',
    storage,
  },
  authSlice.reducer
);
