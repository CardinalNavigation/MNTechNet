import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function EventList() {

    const eventReducer = useSelector((store) => store.eventReducer);
    console.log("Event Reducer Looks Like:", eventReducer)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: 'FETCH_SHELF_ITEMS' });
    }, []);

    return (
        <>
            <div>
                <p>Event List</p>
                {/* {eventReducer.map((event) => (
                    <ul key={event.id}>
                        <li>{event.name}</li>
                    </ul>
                ))
                } */}
            </div>
        </>
    )
}

export default EventList