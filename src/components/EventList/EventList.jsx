import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import "./EventList.css"
function EventList() {

    const eventReducer = useSelector((store) => store.eventReducer.eventReducer);
    console.log("Event Reducer Looks Like:", eventReducer)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: 'FETCH_SHELF_ITEMS' });
    }, []);

    return (
        <>
            <div>
                <h2>Event List</h2>
                <table>
                    <thead>
                        <th>Event Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Address</th>
                        <th>Notes</th>
                    </thead>
                    <tbody>
                {eventReducer.map((event) => (
                    <tr key={event.id}>
                        <td>{event.event_name}</td>
                        <td>{event.formatted_date}</td>
                        <td>{event.time}</td>
                        <td>{event.address}</td>
                        <td>{event.notes}</td>
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