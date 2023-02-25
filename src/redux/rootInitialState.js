import { authInitState } from './auth/authInitialState';
import { contactsInitialState } from './contacts/contactsInitialState';
import { filterInitialState } from './filter/filterInitialState';
import { profileInitialState } from './profile/profileInitialState';

export const rootInitialState = {
  contacts: contactsInitialState,
  filter: filterInitialState,
  auth: authInitState,
  profile:profileInitialState,
};
