import React from "react";
import { useDispatch } from "react-redux";

function EventListButtons(props) {

    const dispatch = useDispatch();

    const deleteEvent = () => {
        console.log("Event ID is:", props.event.id, "The button is working")
        dispatch({ type: "DELETE_EVENT_DATA", payload: { id: props.event.id } });
    };

    return (
        <>
            <td><button>✏️</button></td>
            <td><button onClick={deleteEvent}>❌</button></td>
        </>
    )
}

export default EventListButtons