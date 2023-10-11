import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">MNTechNet</h2>
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
              Dashboard
            </Link>
            <Link className="navLink" to="/createEvent">
             Create Event
            </Link>
            <Link className="navLink" to="/eventList">
             Event List
            </Link>
            <Link className="navLink" to="/addPeople">
            Add People
            </Link>
            <Link className="navLink" to="/people">
            People
            </Link>
            <Link className="navLink" to="/profile">
            Profile
            </Link>
            <LogOutButton className="navLink" />
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
