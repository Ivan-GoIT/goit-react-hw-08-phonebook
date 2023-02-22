import { useSelector } from 'react-redux';
import { selectError } from 'redux/selectors';
import { PhoneApp } from 'components/PhoneApp/PhoneApp';
import { toast } from 'react-toastify';

 const PhoneBookPage = () => {
  const error = useSelector(selectError);

  if (error) {
    toast.error(error);
  }

  return (
      <PhoneApp />
  );
};

export default PhoneBookPage
