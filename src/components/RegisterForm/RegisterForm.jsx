import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
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
  const nevermindButton=()=>{
      console.log("User Said Nevermind")
      history.push('/login')
  }

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Welcome to MNTechNet!</h2>
      <h4>Register Below, and happy networking!</h4>
      
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="e-mail">
          E-mail:
          <input
            type="e-mail"
            name="e-mail"
            value={EMail}
            required
            onChange={(event) => setEMail(event.target.value)}
          />
        </label>
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
      <div>
      <button className="btn" type="nevermind" onClick={nevermindButton}>Nevermind</button>
      </div>
    </form>
  );
}

export default RegisterForm;
