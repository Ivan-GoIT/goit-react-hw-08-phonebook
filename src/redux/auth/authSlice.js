// const initialState = {
//     user: { name: null, email: null },
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//   };

import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'assets/constants';
import { authInitState } from './authInitialState';
import { authLoginThunk } from './authThunk';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
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
      }),
});

export const authReduser = authSlice.reducer;

