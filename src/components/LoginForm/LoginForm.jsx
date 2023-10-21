import { Box, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '@mui/joy/Input';
import { Button } from "@mui/joy";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch();
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }

    dispatch({
      type: 'FETCH_EVENT_DATA',
      payload: user.id
    });
    dispatch({
      type: 'FETCH_PERSON_DATA',
      payload: user.id
    });

    history.push('/dashboard')
  }; // end login

  return (
    <Paper elevation='6'>
      <Box component="form"
        className="formPanel"
        onSubmit={login}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          sx={{ py: 2 }}>
          <Typography variant='h4' color="#235179" >Login</Typography>
        {errors.loginMessage && (
          <Typography variant='body1' sx={{my: 1}} className="alert" role="alert">
            {errors.loginMessage}
          </Typography>
        )}
         </Box>
        <Box display="flex"
          justifyContent="center"
          alignContent="center"
          sx={{ py: 2 }}>
          <Box display="flex"
            flexDirection="column">
            <label htmlFor="username">
              <Input color="primary" variant="outlined" size="lg" sx={{ my: 1 }} type="text" placeholder="Username" requiredvalue={username} onChange={(event) => setUsername(event.target.value)} />
            </label>
            <label htmlFor="password">
              <Input color="primary" variant="outlined" size="lg" sx={{ my: 1 }} type="password" placeholder="Password" required value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <Button type="submit" name="submit" size="lg" sx={{ my: 1 }} value="Log In">
              Log In
            </Button>
            <Button variant="solid" color="success" size="lg" onClick={() => {
              history.push('/registration');
            }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper >
  );
}

export default LoginForm;
