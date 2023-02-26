import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

const PhoneBookPage = lazy(() => import('pages/PhoneBookPage/PhoneBookPage'));

const StartPage = lazy(() => import('pages/StartPage/StartPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<StartPage />} />
          <Route path="" element={<PublicRoute />}>
            <Route path="/sign_in" element={<SignInPage />} />
            <Route path="/sign_up" element={<SignUpPage />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="/phonebook" element={<PhoneBookPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
