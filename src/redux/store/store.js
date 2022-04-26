import { configureStore } from '@reduxjs/toolkit';
import signupVolReducer from '../slices/signUpSlice';
import signupOrgReducer from '../slices/signUpOrgSlice';
import projectsReducer from '../slices/projectsSlice';

const store = configureStore({
  reducer: {
    signupVolunteer: signupVolReducer,
    signupOrganization: signupOrgReducer,
    projects: projectsReducer,
  },
});

export default store;
