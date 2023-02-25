import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'assets/constants';
import { profileInitialState } from './profileInitialState';
import { getProfileThunk } from './profileThunk';

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  extraReducers: builder =>
    builder
      .addCase(getProfileThunk.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(getProfileThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.data = payload;
      })
      .addCase(getProfileThunk.rejected, state => {
        state.status = STATUS.rejected;
      }),
});

export const profileReducer = profileSlice.reducer;
