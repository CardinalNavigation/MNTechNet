import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from '@mui/joy/Input';
import { Button, Textarea } from "@mui/joy";

export default function EventListModal(props) {

    const [eventName, setEventName] = useState(props.event.event_name);
    const [date, setDate] = useState(props.event.formatted_date);
    const [time, setTime] = useState(props.event.time);
    const [address, setAddress] = useState(props.event.address);
    const [notes, setNotes] = useState(props.event.notes);

    const dispatch = useDispatch();

    const user = useSelector((store) => store.user)
    let userId = user.id


    // console.log("in Event Modal:", props.event.id)
    // console.log("in Event Modal:", props.onClose)
    // console.log("Event Name is:", eventName)

    const handleSubmit = () => {
        event.preventDefault();


        let eventUpdateData = {
            eventID: props.event.id,
            eventName: eventName,
            date: date,
            time: time,
            address: address,
            notes: notes,
            userId: userId
        }
        console.log("Profile Update Object Looks Like", eventUpdateData)

        dispatch({
            type: 'UPDATE_EVENT_DATA',
            payload: eventUpdateData
        });


        props.onClose()
    }

    return (
        <>
            <Paper>
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <Typography variant="h3" color="#235179"> Edit This Event </Typography>
                            <Box display="flex"
                                flexDirection="column"
                                alignContent="center"
                                sx={{ py: 4 }}>
                                <form onSubmit={handleSubmit}>
                                    <Box display="flex"
                                        flexDirection="column"
                                        alignItems="center">
                                        <Box display="flex"
                                            flexDirection="column">
                                            <Typography variant="h6" color="#80AEB6">Event Name: {props.event.event_name}</Typography>
                                            <Input color="primary" variant="outlined" size="md"
                                                value={eventName} placeholder="Name of Event" type="text" onChange={(event) => setEventName(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Date: {props.event.formatted_date}</Typography>
                                            <Input color="primary" variant="outlined" size="md"
                                                value={date} placeholder="Date" type="text" onChange={(event) => setDate(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Time: {props.event.time}</Typography>
                                            <Input color="primary" variant="outlined" size="md"
                                                value={time} placeholder="Time" type="text" onChange={(event) => setTime(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Location: {props.event.address}</Typography>
                                            <Input color="primary" variant="outlined" size="md"
                                                value={address} placeholder="Address" type="text" onChange={(event) => setAddress(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Notes:</Typography>
                                            <Textarea color="primary" variant="outlined" size="md"
                                                value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></Textarea>
                                        </Box>
                                        <Box sx={{ py: 2 }}>
                                        <Button variant="soft" color="primary" size="lg" sx={{ m: 2 }} type='submit'>Save</Button>
                                        <Button variant="soft" color="danger" size="lg" type='nevermind'onClick={props.onClose}>Nevermind</Button>
                                        </Box>
                                    </Box>
                                </form>
                            </Box>
                        </div>
                    </div>
                </div >
            </Paper>
        </>
    )

}