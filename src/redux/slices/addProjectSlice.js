import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import useFetch from '../../hooks/fetchHook';

const addUrl = 'https://voluntera.herokuapp.com/api/projects';

export const addProject = createAsyncThunk('add/Project', async (body) => {
  const result = await useFetch(addUrl, body);
  return result;
});
const addProjectSlice = createSlice({
  name: 'addproject',
  initialState: {
    status: null,
    message: null,
    error: null,
  },
  extraReducers: {
    [addProject.pending]: (state) => {
      state.status = 'adding';
    },
    [addProject.fulfilled]: (state) => {
      state.status = 'added';
    },
    [addProject.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default addProjectSlice.reducer;
