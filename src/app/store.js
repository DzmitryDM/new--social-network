
import { configureStore} from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import messagesSlice from '../features/messages/messagesSlice';
import profileSlice from '../features/profile/profileSlice';
import usersSlice from '../features/users/userSlice'
import initializeSlice from '../features/auth/initializeSlice'
import { setProfile } from '../features/profile/rtk';






 const store= configureStore({
reducer:{
      profile:profileSlice,
      messages:messagesSlice,
      users:usersSlice,
      auth:authSlice,
      initialize:initializeSlice,
      [setProfile.reducerPath]:setProfile.reducer,

},
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(setProfile.middleware),
})

window.store=store

export default store