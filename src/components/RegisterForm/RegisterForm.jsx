import { Button, Input } from '@mui/joy';
import { Box, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [EMail, setEMail] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        EMail: EMail,
      },
    });
    history.push('/registrationSuccess')
  }; // end registerUser

  //This will bring our user back to our landing page to login or register
  const nevermindButton = () => {
    console.log("User Said Nevermind")
    history.push('/login')
  }

  return (
    <Paper>
      <Box
        component="form"
        className="formPanel"
        onSubmit={registerUser}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          sx={{ py: 2 }}>
          <Typography variant='h3' color="#235179">Welcome to MNTechNet!</Typography>
          <Typography variant='h6' color="#80AEB6">Register Below, and happy networking!</Typography>
          {errors.registrationMessage && (
            <Typography variant='body1' className="alert" role="alert">
              {errors.registrationMessage}
            </Typography>
          )}
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          sx={{ py: 2 }}>
          <Box display="flex"
            flexDirection="column">
            <label htmlFor="username">
              {/* Username: */}
              <Input
                type="text"
                placeholder="Username"
                sx={{ my: 1 }} 
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <label htmlFor="password">
              {/* Password: */}
              <Input
                type="password"
                placeholder="Password"
                sx={{ my: 1 }} 
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <label htmlFor="e-mail">
              {/* E-mail: */}
              <Input
                type="e-mail"
                placeholder="E-mail"
                sx={{ my: 1 }} 
                value={EMail}
                required
                onChange={(event) => setEMail(event.target.value)}
              />
            </label>
            <Button variant="solid" color="primary" sx={{ my: 1 }} type="submit" name="submit"  size="lg" value="Register">Register</Button>
            <Button variant="solid" color="danger" type="nevermind" size="lg" onClick={nevermindButton}>Nevermind</Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}

export default RegisterForm;
