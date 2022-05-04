import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useFetch from '../../hooks/fetchHook';

const orgUrl = 'https://voluntera.herokuapp.com/auth/signup/organization';

export const signUpOrg = createAsyncThunk(
  'signupUser/Organization',
  async (body) => {
    const result = await useFetch(orgUrl, body);
    return result;
  },
);
const signUpOrgSlice = createSlice({
  name: 'signup',
  initialState: {
    status: null,
    message: null,
    error: null,
  },
  extraReducers: {
    [signUpOrg.pending]: (state) => {
      state.status = 'signing';
      state.message = 'signing up please wait';
    },
    [signUpOrg.fulfilled]: (state, { payload }) => {
      state.status = 'signedup';
      state.message = payload.message;
    },
    [signUpOrg.rejected]: (state, { payload }) => {
      state.status = payload.status;
      state.error = payload.message;
    },
  },
});

export default signUpOrgSlice.reducer;
