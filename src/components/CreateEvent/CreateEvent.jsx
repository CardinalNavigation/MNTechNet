import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"

import './CreateEvent.css'
import { Box, Paper, Typography } from "@mui/material";
import Input from '@mui/joy/Input';
import { Button, Textarea } from "@mui/joy";
import EventAvailableTwoToneIcon from '@mui/icons-material/EventAvailableTwoTone';



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

    // Use Dispatch and History to send to the redux saga,
    // which sends to server and ultimately our
    // SQL database
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        event.preventDefault()
        let eventReducerInput = {
            eventName: eventName,
            date: date,
            time: time,
            address: address,
            notes: notes,
            user: user.id
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

    const nevermindButton = () => {
        console.log("User Said Nevermind")
        history.push('/dashboard')
    }
    const handleHover = () => {
        setEventName('Twin Cities Software Symposium');
        setDate("10/30/23")
        setTime("7:30AM")
        setAddress('Hilton Minneapolis Bloomington 3900 American Blvd W, Bloomington, MN')
        setNotes("I know at least 3 people that are going. I want to check out the talk on Java fundamentals")
    };


    return (
        <Paper elevation='6'>
            <Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    sx={{ py: 2, paddingTop: "32px" }}>
                    <Typography variant="h3" color="#235179">Create Event</Typography>
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    alignContent="center"
                    marginLeft="25%"
                    marginRight="25%"
                    sx={{ py: 4 }}>
                    <form onSubmit={handleSubmit}>
                        <Box display="flex"
                            flexDirection="column"
                            alignItems="center">
                            <Box display="flex"
                                flexDirection="column">
                                <Textarea color="primary" variant="outlined" sx={{ my: 1 }} size="lg" value={eventName} placeholder="Name of Event" type="text" onChange={(event) => setEventName(event.target.value)}></Textarea>
                                <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg" value={date} placeholder="Date" type="text" onChange={(event) => setDate(event.target.value)}></Input>
                                <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg" value={time} placeholder="Time" type="text" onChange={(event) => setTime(event.target.value)}></Input>
                                <Textarea color="primary" variant="outlined" sx={{ my: 1 }} size="lg" value={address} placeholder="Address" type="text" onChange={(event) => setAddress(event.target.value)}></Textarea>
                                <Textarea onMouseEnter={handleHover} color="primary" variant="outlined" sx={{ my: 1 }} size="lg" value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></Textarea>
                            </Box>
                            <Box>
                                <Button variant="soft" color="primary" size="lg" sx={{ mx: .5 }} type='submit'>Submit<EventAvailableTwoToneIcon></EventAvailableTwoToneIcon></Button>
                                <Button variant="soft" color="danger" size="lg" type='nevermind' onClick={nevermindButton}>Nevermind</Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Paper>
    )
}

export default CreateEvent