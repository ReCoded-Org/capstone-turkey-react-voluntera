import projectsReducer from '../slices/projectsSlice';
import postsReducer from '../slices/postsSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    posts: postsReducer,
  },
});

export default store;
