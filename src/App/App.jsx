import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PhoneBookPage = lazy(() => import('pages/PhoneBookPage/PhoneBookPage'));
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
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
          <Route path="/phonebook" element={<PhoneBookPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
