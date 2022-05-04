import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useFetch from '../../hooks/fetchHook';

const volUrl = 'https://voluntera.herokuapp.com/auth/signup/volunteer';

export const signUpUser = createAsyncThunk(
  'signupUser/Volunteer',
  async (body) => {
    const result = await useFetch(volUrl, body);
    return result;
  },
);
const signUpSlice = createSlice({
  name: 'signup',
  initialState: {
    status: null,
    message: null,
    error: null,
  },
  extraReducers: {
    [signUpUser.pending]: (state) => {
      state.status = 'signing';
    },
    [signUpUser.fulfilled]: (state) => {
      state.status = 'signedup';
    },
    [signUpUser.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
  },
});

export default signUpSlice.reducer;
