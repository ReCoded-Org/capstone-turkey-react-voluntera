import { configureStore } from '@reduxjs/toolkit';
import signupVolReducer from '../slices/signUpSlice';
import signupOrgReducer from '../slices/signUpOrgSlice';
import projectsReducer from '../slices/projectsSlice';
import postsReducer from '../slices/postsSlice';

const store = configureStore({
  reducer: {
    signupVolunteer: signupVolReducer,
    signupOrganization: signupOrgReducer,
    projects: projectsReducer,
    posts: postsReducer,
  },
});

export default store;
