import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, publicApi, token } from 'http/http';

export const authLoginThunk = createAsyncThunk('login', async values => {
  const { data } = await publicApi.post('/users/login', values);

  token.set('Bearer ' + data.token);
  return data;
});

export const authLogoutThunk = createAsyncThunk('logout', async values => {
  const { data } = await privateApi.post('/users/logout', values);

  token.set('Bearer ' + data.token);
  return data;
});
