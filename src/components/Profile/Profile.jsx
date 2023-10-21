import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from '@mui/joy/Input';
import { Button } from "@mui/joy";


function Profile() {

    const user = useSelector((store) => store.user)
    let userID = user.id
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        event.preventDefault()

        if ((password === passwordConfirm) && password != '') {
            setPassword(password)
        } else {
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
        console.log('User Data Updated')
        history.push('/dashboard')
    }

    const nevermindButton = () => {
        console.log("User Said Nevermind")
        history.push('/dashboard')
    }

    return (
        <Paper elevation='6'>
            <Box
                display="flex"
                justifyContent="center"
                sx={{ py: 4 }}>
                <Typography variant="h3" color="#235179">Profile</Typography>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignContent="center"
                sx={{ py: 2 }}>
                <form onSubmit={handleSubmit}>
                    <Box display="flex"
                        flexDirection="column"
                        alignItems="center">
                        <Box display="flex"
                            flexDirection="column">
                            <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg"
                                value={username} placeholder="Username" type="text" onChange={(event) => setUsername(event.target.value)}></Input>
                            <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg"
                                value={email} placeholder="E-mail Address" type="text" onChange={(event) => setEmail(event.target.value)}></Input>
                            <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg"
                                value={password} placeholder="Password" type="text" onChange={(event) => setPassword(event.target.value)}></Input>
                            <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg"
                                value={passwordConfirm} placeholder="Confirm Password" type="text" onChange={(event) => setPasswordConfirm(event.target.value)}></Input>
                        </Box>
                        <Box>
                            <Button variant="soft" color="primary" size="lg" sx={{ mx: 2 }} type="submit">Submit</Button>
                            <Button variant="soft" color="danger" size="lg" type="nevermind" onClick={nevermindButton}>Nevermind</Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Paper>
    )
}

export default Profile