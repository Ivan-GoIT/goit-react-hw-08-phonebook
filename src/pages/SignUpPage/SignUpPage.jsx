import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { PersonAdd, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { Logo } from 'components/Logo/Logo';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { authLoginThunk } from 'redux/auth/authThunk';
import { publicApi } from 'http/http';

import css from './SignUpPage.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [showPassword, setshowPassword] = useState(false);
  const [values, setValues] = useState(initialState);

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const onCangeInputHandler = evt => {
    const { name, value } = evt.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async evt => {
    evt.preventDefault();
    try {
      await publicApi.post(
        '/users/signup',
        values
      );

      await dispatch(
        authLoginThunk({ email: values.email, password: values.password })
      ).unwrap();

      toast.success('User created');
      navigate('/phonebook', { replace: true });
    } catch (error) {
      console.log(error);
      toast.error('something went wrong');
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <Logo />
      <Container component="main" maxWidth="xs" className={css.container}>
        <CssBaseline />
        <div className={css.paper}>
          <Avatar className={classNames(css.loginAvatar, css.closed)}>
            <PersonAdd />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={css.form} onSubmit={onSubmitHandler}>
            <TextField
              value={values.name}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={onCangeInputHandler}
            />
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
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              onChange={onCangeInputHandler}
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={css.submit}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    </StyledEngineProvider>
  );
};

export default SignUpPage;
