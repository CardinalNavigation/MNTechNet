import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import RegisterForm from '../RegisterForm/RegisterForm';
import Dashboard from '../Dashboard/Dashboard';
import CreateEvent from '../CreateEvent/CreateEvent';
import EventList from '../EventList/EventList';
import AddPeople from '../AddPeople/AddPeople';
import People from '../People/People';
import Profile from '../Profile/Profile';
import LoginForm from '../LoginForm/LoginForm';

import './App.css';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/login" />

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the Dashboard if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginForm (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}


          {/*logged in shows Protected Routes else shows LoginForm */}
          <ProtectedRoute
            exact
            path="/dashboard"
          >
            <Dashboard />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/createEvent"
          >
            <CreateEvent />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/eventList"
          >
            <EventList />
          </ProtectedRoute>


          <ProtectedRoute
            exact
            path="/addPeople"
          >
            <AddPeople />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/people"
          >
            <People />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/profile"
          >
            <Profile />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/dashboard" />
              :
              // Otherwise, show the login page
              <LoginForm />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            <RegisterForm />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
