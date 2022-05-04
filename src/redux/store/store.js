import { configureStore } from '@reduxjs/toolkit';

import signupVolReducer from '../slices/signUpSlice';
import signupOrgReducer from '../slices/signUpOrgSlice';
import projectsReducer from '../slices/projectsSlice';
import postsReducer from '../slices/postsSlice';
import userReducer from '../slices/signinSlice';
import addprojectReducer from '../slices/addProjectSlice';

const store = configureStore({
  reducer: {
    signupVolunteer: signupVolReducer,
    signupOrganization: signupOrgReducer,
    projects: projectsReducer,
    posts: postsReducer,
    user: userReducer,
    addproject: addprojectReducer,
  },
});
export default store;
