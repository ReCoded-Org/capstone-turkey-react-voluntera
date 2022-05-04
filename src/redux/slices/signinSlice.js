import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useFetch from '../../hooks/fetchHook';

const signinUrl = 'https://voluntera.herokuapp.com/auth/signin';

export const signInUser = createAsyncThunk('signin/User', async (body) => {
  const result = await useFetch(signinUrl, body);
  return result;
});

const signinSlice = createSlice({
  name: 'signin',
  initialState: {
    status: null,
    message: null,
    error: null,
    user: null,
  },

  extraReducers: {
    [signInUser.pending]: (state) => {
      state.status = 'loading';
    },
    [signInUser.fulfilled]: (state, { payload }) => {
      state.status = 'loaded';
      state.user = payload;
    },
    [signInUser.rejected]: (state, { payload }) => {
      state.status = 'rejected';
      state.error = payload;
    },
  },
});

export default signinSlice.reducer;
