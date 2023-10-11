import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

import './CreateEvent.css'

function CreateEvent() {
    // Below useState relates to the Create Event Form Which Captures User Input
    // User input is packaged together into eventReducerInput, to be sent to our Reducer and Redux Saga
    // So that the information can be displayed on the DOM
    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');

    // Use Dispatch and History to send to the redux saga, which sends to server and ultimately our
    // SQL database
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        //event.preventDefault prevents the page from automatically refreshing and deleting our input data
        event.preventDefault()
        //eventReducerInput is our package which we are sending to the server
        let eventReducerInput = {
            eventName: eventName,
            date: date,
            time: time,
            address: address,
            notes: notes,
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
        <div>
            <div>
                <h2>Create Event</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input value={eventName} placeholder="Name of Event" type="text" onChange={(event) => setEventName(event.target.value)}></input>
                    <input value={date} placeholder="Date" type="text" onChange={(event) => setDate(event.target.value)}></input>
                    <input value={time} placeholder="Time" type="text" onChange={(event) => setTime(event.target.value)}></input>
                    <input value={address} placeholder="Address" type="text" onChange={(event) => setAddress(event.target.value)}></input>
                    <input value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></input>
                    <button type='submit'>Submit</button>
                </form>
                <button type='nevermind'>Nevermind</button>
            </div>
        </div>
    )
}

export default CreateEvent