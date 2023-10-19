import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
                                        <h4>Event Name: {props.event.event_name}</h4>
                                        <input value={eventName} placeholder="Name of Event" type="text" onChange={(event) => setEventName(event.target.value)}></input>
                                        <h4>Date: {props.event.formatted_date}</h4>
                                        <input value={date} placeholder="Date" type="text" onChange={(event) => setDate(event.target.value)}></input>
                                        <h4>Time: {props.event.time}</h4>
                                        <input value={time} placeholder="Time" type="text" onChange={(event) => setTime(event.target.value)}></input>
                                        <h4>Location: {props.event.address}</h4>
                                        <input value={address} placeholder="Address" type="text" onChange={(event) => setAddress(event.target.value)}></input>
                                        <h4>Notes: {props.event.notes}</h4>
                                        <input value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></input>
                                    </Box>
                                    <Box sx={{ py: 2 }}>
                                        <button type='submit'>Save</button>
                                        <button type='nevermind' onClick={props.onClose}>Nevermind</button>
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