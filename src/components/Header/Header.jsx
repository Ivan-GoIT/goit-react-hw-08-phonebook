import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/authSelectors';
import { authLogoutThunk } from 'redux/auth/authThunk';
import { getProfileThunk } from 'redux/profile/profileThunk';
import { selectProfileName } from 'redux/profile/profoleSelector';

const Header = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken).token;
  const userName = useSelector(selectProfileName);

  useEffect(() => {
    if (token) {
      dispatch(getProfileThunk());
    }
  }, [dispatch, token]);

  const handlerLogoutButton = () => {
    dispatch(authLogoutThunk());
  };

  return (
    <>
      <header>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Phonebook
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 0.2 }}>
                {userName}
              </Typography>
              <Button color="inherit" onClick={handlerLogoutButton}>
                LogOut
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </header>
    </>
  );
};

export default Header;
