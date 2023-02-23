import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const authLoginThunk = createAsyncThunk('login', async values => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/login',
    values
  );
  return data
});
