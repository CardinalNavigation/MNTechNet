import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { AppBar, Container, Typography } from '@mui/material';

function Nav() {
  const user = useSelector((store) => store.user);

  return (

    <div className="nav">
      <Link to="/login">
        {/* <h2 className="nav-title">MNTechNet</h2> */}
        <Typography variant='h2' fontWeight='bold' color="white">MNTechNet</Typography>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {/* {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )} */}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/dashboard">
              <Typography variant='h6'> Dashboard</Typography>
            </Link>
            <Link className="navLink" to="/createEvent">
              <Typography variant='h6'> Create Event</Typography>
            </Link>
            <Link className="navLink" to="/eventList">
              <Typography variant='h6'>  Event List </Typography>
            </Link>
            <Link className="navLink" to="/addPeople">
            <Typography variant='h6'> Add People </Typography>
            </Link>
            <Link className="navLink" to="/people">
            <Typography variant='h6'>People </Typography>
            </Link>
            <Link className="navLink" to="/profile">
            <Typography variant='h6'> Profile </Typography>
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
