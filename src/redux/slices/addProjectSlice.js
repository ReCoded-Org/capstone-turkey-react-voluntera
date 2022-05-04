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
    [addProject.fulfilled]: (state, { payload }) => {
      state.status = 'added';
      state.message = payload.message;
    },
    [addProject.rejected]: (state, { payload }) => {
      state.status = payload.status;
      state.error = payload.message;
    },
  },
});

export default addProjectSlice.reducer;
