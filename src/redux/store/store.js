import projectsReducer from '../slices/projectsSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export default store;
