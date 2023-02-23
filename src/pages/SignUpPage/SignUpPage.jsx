import {
  Avatar,
  Button,
  Container,
  CssBaseline,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import css from './SignUpPage.module.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { Logo } from 'components/Logo/Logo';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const SignUpPage = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [values, setValues] = useState(initialState);

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const onCangeInputHandler = evt => {
    const { name, value } = evt.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler =async (evt) => {
    evt.preventDefault();
    try {

     await axios.post('https://connections-api.herokuapp.com/users/signup', values);
      toast.success('User created')

    } catch (error) {
      console.log(error)
      toast.error('something went wrong')
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <Logo />
      <Container component="main" maxWidth="xs" className={css.container}>
        <CssBaseline />
        <div className={css.paper}>
          <Avatar className={css.ligin_avatar}>
            <LockIcon />
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
