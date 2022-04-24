import { configureStore } from '@reduxjs/toolkit';
import signupVolReducer from '../slices/signUpSlice';
import signupOrgReducer from '../slices/signUpOrgSlice';

const store = configureStore({
  reducer: {
    signupVolunteer: signupVolReducer,
    signupOrganization: signupOrgReducer,
  },
});

export default store;
