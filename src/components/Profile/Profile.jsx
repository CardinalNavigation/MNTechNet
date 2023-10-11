import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Profile() {

    const user = useSelector((store) => store.user)
    let userId=user.username
    const [username, setUsername] = useState(userId);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        console.log("click works")
        event.preventDefault()

        let profileUpdateData = {
            username: username,
            email: email,
            password: password
        }

        dispatch({
            type: 'UPDATE_USER_INFO',
            payload: profileUpdateData
        });
    }

    return (
        <>
            <h2>Edit Profile</h2>
            <form>
                <input value={username} placeholder="Username" type="text"></input>
                <input value={email} placeholder="E-mail Address" type="text" onChange={(event) => setEmail(event.target.value)}></input>
                <input value={password} placeholder="Password" type="text" onChange={(event) => setPassword(event.target.value)}></input>
                <input value={passwordConfirm} placeholder="Confirm Password" type="text" onChange={(event) => setPasswordConfirm(event.target.value)}></input>
                <button type="nevermind">Nevermind</button>
                <button type="submit">Save</button>
            </form>


        </>
    )
}

export default Profile