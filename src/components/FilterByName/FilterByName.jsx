//import debounce from 'lodash.debounce';
//import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChangeAction } from 'redux/filter/filterSlice';
import css from './FilterByName.module.css';

export const FilterByName = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // const searchContacts = useMemo((searchString) => {
  //   return debounce(() => {
  //     dispatch(filterChangeAction(searchString));
  //   }, 1000);
  // }, [dispatch]);

  const handleFilterChange = evt => {
    dispatch(filterChangeAction(evt.currentTarget.value));
  };

  return (
    <label>
      <p className={css.labelStyle}>Find contacts by name</p>
      <input
        className={css.inputStyle}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};
