import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function Profile() {

    const user = useSelector((store) => store.user)
    let userID=user.id
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        event.preventDefault()

        if (password === passwordConfirm){
            setPassword(password)
        } else{
            alert("Passwords Do Not Match")
        }

        let profileUpdateData = {
            userID: userID,
            username: username,
            email: email,
            password: password
        }
        console.log("Profile Update Object Looks Like", profileUpdateData)

        dispatch({
            type: 'UPDATE_USER_INFO',
            payload: profileUpdateData
        });
    }

    return (
        <>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <input value={username} placeholder="Username" type="text" onChange={(event) => setUsername(event.target.value)}></input>
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