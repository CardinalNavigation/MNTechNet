import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"

import './CreateEvent.css'
import { Box, Button, Paper, Typography } from "@mui/material";
import Input from '@mui/joy/Input';


function CreateEvent() {
    // Below useState relates to the Create Event Form Which Captures User Input
    // User Input is packaged together into eventReducerInput, to be sent to our Reducer and Redux Saga
    // So that the information can be displayed on the DOM
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');

    const user = useSelector((store) => store.user);
    // console.log("User is:", user)

    // Use Dispatch and History to send to the redux saga, which sends to server and ultimately our
    // SQL database
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        //event.preventDefault prevents the page from automatically refreshing and deleting our Input data
        event.preventDefault()
        //eventReducerInput is our package which we are sending to the server
        let eventReducerInput = {
            eventName: eventName,
            date: date,
            time: time,
            address: address,
            notes: notes,
            user: user.id
            // event_complete: false
        }

        console.log(eventReducerInput)

        dispatch({
            type: 'SET_EVENT_POST',
            payload: eventReducerInput
        });

        setEventName('')
        setDate('')
        setTime('')
        setAddress('')
        setNotes('')

        history.push('/eventList')
    }

    return (
        <Paper elevation='6'>
            <div>
                <Box
                    display="flex"
                    justifyContent="center"
                    sx={{ py: 4 }}>
                    <Typography variant="h3" color="#235179">Create Event</Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignContent="center"
                    sx={{ py: 4 }}>
                    <form onSubmit={handleSubmit}>
                        <Box display="flex"
                            flexDirection="column"
                            alignItems="center">
                            <Box display="flex"
                                flexDirection="column">
                                <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg" value={eventName} placeholder="Name of Event" type="text" onChange={(event) => setEventName(event.target.value)}></Input>
                                <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg" value={date} placeholder="Date" type="text" onChange={(event) => setDate(event.target.value)}></Input>
                                <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg" value={time} placeholder="Time" type="text" onChange={(event) => setTime(event.target.value)}></Input>
                                <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg" value={address} placeholder="Address" type="text" onChange={(event) => setAddress(event.target.value)}></Input>
                                <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg" value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></Input>
                            </Box>
                            <Box>
                                <Button variant="solid" size="lg" type='submit'>Submit</Button>
                                <Button variant="solid"  color="danger" type='nevermind'>Nevermind</Button>     
                            </Box>
                        </Box>
                    </form>
                </Box>

            </div>
        </Paper>
    )
}

export default CreateEvent