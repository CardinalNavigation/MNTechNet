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
            <div className="modal">
                <div className="overlay">
                    <div className="modal-content">
                        <Paper alignItems="center" elevation="6" sx={{ my: 5 }}>
                            <Box display="flex"
                                flexDirection="column"
                                alignContent="center"
                                sx={{ p: 6 }}>
                                    <Box display="flex" alignItems="center" flexDirection="column">
                                    <Typography variant="h4" color="#235179"> Edit This Event </Typography>
                                    </Box>
                                <form onSubmit={handleSubmit}>
                                    <Box display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        >
                                        <Box display="flex"
                                            flexDirection="column">
                                            <Typography variant="h6" color="#80AEB6">Event Name:</Typography>
                                            <Input color="primary" variant="outlined" size="md" sx={{ m: .5 }}
                                                value={eventName} placeholder="Name of Event" type="text" onChange={(event) => setEventName(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Date:</Typography>
                                            <Input color="primary" variant="outlined" size="md" sx={{ m: .5 }}
                                                value={date} placeholder="Date" type="text" onChange={(event) => setDate(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Time: {props.event.time}</Typography>
                                            <Input color="primary" variant="outlined" size="md" sx={{ m: .5 }}
                                                value={time} placeholder="Time" type="text" onChange={(event) => setTime(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Location:</Typography>
                                            <Input color="primary" variant="outlined" size="md" sx={{ m: .5 }}
                                                value={address} placeholder="Address" type="text" onChange={(event) => setAddress(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Notes:</Typography>
                                            <Textarea color="primary" variant="outlined" size="md" sx={{ m: .5 }}
                                                value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></Textarea>
                                        </Box>
                                        <Box sx={{ py: 2 }}>
                                            <Button variant="soft" color="primary" size="lg" sx={{ m: 2 }} type='submit'>Save</Button>
                                            <Button variant="soft" color="danger" size="lg" type='nevermind' onClick={props.onClose}>Nevermind</Button>
                                        </Box>
                                    </Box>
                                </form>
                            </Box>
                        </Paper>
                    </div>
                </div>
            </div >

        </>
    )

}