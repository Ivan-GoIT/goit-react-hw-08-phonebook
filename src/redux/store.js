import { configureStore } from '@reduxjs/toolkit';
import { authReduser } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';
import { rootInitialState } from './rootInitialState';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { profileReducer } from './profile/profileSlice';

export const store = configureStore({
  preloadedState: rootInitialState,
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReduser,
    profile:profileReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor=persistStore(store)
