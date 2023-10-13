import React from "react";
import { useEffect, useState } from "react";

export default function EventListEdit(){

    const [eventName, setEventName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [address, setAddress] = useState('');
    const [notes, setNotes] = useState('');
    

    return (
        <>
        <h1>Edit This Event</h1>
        <div>
                <form>
                    <input value={eventName} placeholder="Name of Event" type="text" onChange={(event) => setEventName(event.target.value)}></input>
                    <input value={date} placeholder="Date" type="text" onChange={(event) => setDate(event.target.value)}></input>
                    <input value={time} placeholder="Time" type="text" onChange={(event) => setTime(event.target.value)}></input>
                    <input value={address} placeholder="Address" type="text" onChange={(event) => setAddress(event.target.value)}></input>
                    <input value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></input>
                    <button type='submit'>Submit</button>
                </form>
                <button type='nevermind'>Nevermind</button>
            </div>
        </>
    )

    
}