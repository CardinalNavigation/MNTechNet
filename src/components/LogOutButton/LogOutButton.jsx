import { Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <button
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
       <Typography variant='h6'> Log Out</Typography>
    </button>
  );
}

export default LogOutButton;
