import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  return fetch('https://voluntera.herokuapp.com/api/posts')
    .then((x) => x.json())
    .then((d) => d);
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'success';
    },
    [getPosts.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default postsSlice.reducer;
