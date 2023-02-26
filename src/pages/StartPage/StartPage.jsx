import React from 'react';
import backgroundImage from '../../assets/images/phonebook.jpg';
import { Grid, Link, Typography } from '@mui/material';
import css from './StartPage.module.css';

const StartPage = () => {
  return (
    <div className={css.startPage}>
      <Grid container className={css.content}>
        <Grid item xs={6}>
          <Typography variant="h1" className={css.title}>
            Phonebook
          </Typography>
        </Grid>
        <Grid item xs={6} >
          <div className={css.buttonPosition}>
            <Link
              href="/goit-react-hw-08-phonebook/sign_in"
              variant="contained"
              color="secondary"
              className={css.button}
            >
              SignIn
            </Link>
            <Link
              variant="contained"
              color="primary"
              href="/goit-react-hw-08-phonebook/sign_up"
              className={css.button}
            >
              SignUp
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default StartPage;
