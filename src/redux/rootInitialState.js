import { authInitState } from './auth/authInitialState';
import { contactsInitialState } from './contacts/contactsInitialState';
import { filterInitialState } from './filter/filterInitialState';

export const rootInitialState = {
  contacts: contactsInitialState,
  filter: filterInitialState,
  auth: authInitState,
};
