import React from "react";
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import EventListModal from "../EventListModal/EventListModal"

import "./EventList.css";
import EventListButtons from "../EventListButtons/EventListButtons";

function EventList() {

    const eventReducer = useSelector((store) => store.eventReducer.eventReducer);
    const user = useSelector((store) => store.user)
    let userId = user.id
    // console.log(user.id)
    // console.log("Event Reducer Looks Like:", eventReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_EVENT_DATA', payload: userId});
    }, []);

    return (
        <>
            <div>
                <h2>Event List</h2>
                <table>
                    <thead>
                        <tr>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Address</th>
                        <th>Notes</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eventReducer.map((event) => (
                            <tr key={event.id}>
                                <td>{event.event_name}</td>
                                <td>{event.formatted_date}</td>
                                <td>{event.time}</td>
                                <td>{event.address}</td>
                                <td>{event.notes}</td>
                                <EventListButtons event={event} />
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default EventList