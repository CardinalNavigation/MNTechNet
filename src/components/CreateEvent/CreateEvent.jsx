import React from "react";
import { useState } from "react";

function CreateEvent() {

    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = () => {
        event.preventDefault()

    }

    return (
        <section>
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
                <button>Nevermind</button>
            </div>
        </section>
    )
}

export default CreateEvent