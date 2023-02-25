import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  // IconButton,
  // InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { StyledEngineProvider } from '@mui/material/styles';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { Logo } from 'components/Logo/Logo';

import css from '../SignUpPage/SignUpPage.module.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginThunk } from 'redux/auth/authThunk';
import { selectAuthStatus } from 'redux/auth/authSelectors';
import { STATUS } from 'assets/constants';
import Loader from 'components/Loader/Loader';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const dispatch = useDispatch();
  // const [showPassword, setshowPassword] = useState(false);
  const [values, setValues] = useState(initialState);
  const status = useSelector(selectAuthStatus);

const navigate=useNavigate()

  // const handleClickShowPassword = () => {
  //   setshowPassword(!showPassword);
  // };

  const onCangeInputHandler = evt => {
    const { name, value } = evt.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async evt => {
    evt.preventDefault();
    try {
      await dispatch(authLoginThunk(values)).unwrap();
      navigate('/phonebook',{replace:true})
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const toggleIconColor=()=>classNames(css.loginAvatar,status===STATUS.success?css.success:css.closed)

  return (
    <StyledEngineProvider injectFirst>
      <Logo />
      <Container component="main" maxWidth="xs" className={css.container}>
        <CssBaseline />
        <div className={css.paper}>
          {status === STATUS.loading ? (
            <Loader />
          ) : (
            <Avatar id="login_avatar" className={toggleIconColor()}>
              <LockIcon />
            </Avatar>
          )}
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={css.form} onSubmit={onSubmitHandler}>
            <TextField
              value={values.email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={onCangeInputHandler}
            />
            <TextField
              value={values.password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type='password'
              //type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              // endAdornment={
              //   <InputAdornment position="end">
              //     <IconButton
              //       aria-label="toggle password visibility"
              //       onClick={handleClickShowPassword}
              //     >
              //       {showPassword ? <Visibility /> : <VisibilityOff />}
              //     </IconButton>
              //   </InputAdornment>
              // }
              onChange={onCangeInputHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={css.submit}
            >
              Sign In
            </Button>
            <Link href="/goit-react-hw-08-phonebook/sign_up" variant="body1">
              {"Don't have an account? Sign Up"}
            </Link>
          </form>
        </div>
      </Container>
    </StyledEngineProvider>
  );
};

export default SignInPage;
