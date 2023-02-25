import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, token } from 'http/http';
import { selectAuthToken } from 'redux/auth/authSelectors';

export const getProfileThunk = createAsyncThunk(
  'profile',
  async (_, { getState, rejectWithValue }) => {
    const stateToken = selectAuthToken(getState());

    if (!stateToken) {
      return rejectWithValue();
    }

    token.set('Bearer ' + stateToken.token);
    const { data } = await privateApi.get('/users/current');
    return data;
  }
);
