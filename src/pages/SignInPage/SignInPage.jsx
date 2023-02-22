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
import { StyledEngineProvider } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { Logo } from 'components/Logo/Logo';

import css from '../SignUpPage/SignUpPage.module.css';

const initialState={
  email:'',
  password:''
}

const SignInPage = () => {
  const [showPassword, setshowPassword] = useState(false);
  const [values, setValues] = useState(initialState);

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };

  const onCangeInputHandler=evt=>{
    const {name,value}=evt.target
    setValues(prev=>({...prev,[name]:value}))
  }

  const onSubmitHandler = evt => {
    evt.preventDefault();
  };


  return (
    <StyledEngineProvider injectFirst>
      <Logo />
      <Container component="main" maxWidth="xs" className={css.container}>
        <CssBaseline />
        <div className={css.paper}>
          <Avatar className={css.avatar}>
            <LockIcon />
          </Avatar>
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
              type={showPassword ? 'text' : 'password'}
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
            <Link href="#" variant="body1">
              {"Don't have an account? Sign Up"}
            </Link>
          </form>
        </div>
      </Container>
    </StyledEngineProvider>
  );
};

export default SignInPage;
