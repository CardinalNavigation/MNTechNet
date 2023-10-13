import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createPortal } from "react-dom";
import { useState } from "react";

import EventListModal from "../EventListModal/EventListModal"

function EventListButtons(props) {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    // console.log("EventListButton Props Looks Like:", props)
    let event=props.event

    const deleteEvent = () => {
        console.log("Event ID is:", props.event.id, "The button is working")
        dispatch({ type: "DELETE_EVENT_DATA", payload: { id: props.event.id } });
    };

    return (
        <>
            <td><button onClick={() => setShowModal(true)}>
            ✏️
            </button></td>
            {showModal && createPortal(
                <EventListModal onClose={() => setShowModal(false)} 
                event={event}/>,
                document.body
            )}

            <td><button onClick={deleteEvent}>❌</button></td>
        </>
    )
}

export default EventListButtons