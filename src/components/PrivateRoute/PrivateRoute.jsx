import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/authSelectors';

export const PrivateRoute = () => {
  const token = useSelector(selectAuthToken);
  return token ? <Outlet /> : <Navigate to="/sign_in" replace /> ;
};
