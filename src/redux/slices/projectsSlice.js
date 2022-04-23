import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProjects = createAsyncThunk(
  'projects/getProjects',
  async () => {
    return fetch('https://voluntera.herokuapp.com/api/projects')
      .then((x) => x.json())
      .then((d) => d);
  },
);
const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getProjects.pending]: (state) => {
      state.status = 'loading';
    },
    [getProjects.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'success';
    },
    [getProjects.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default projectsSlice.reducer;
