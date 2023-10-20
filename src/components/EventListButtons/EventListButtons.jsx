import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createPortal } from "react-dom";
import { useState } from "react";

import EventListModal from "../EventListModal/EventListModal"
import { Button } from "@mui/joy";

function EventListButtons(props) {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((store) => store.user)
    let userId = user.id


    // console.log("EventListButton Props Looks Like:", props)
    let event = props.event

    const deleteEvent = () => {
        console.log("Event ID is:", props.event.id, "The button is working", "UserID is: ", userId)
        dispatch({
            type: "DELETE_EVENT_DATA",
            payload: {
                id: props.event.id,
                userId: userId
            }
        });
    };

    return (
        <>
            <td align="center"><Button variant="outlined" color="neutral" onClick={() => setShowModal(true)}>
                ✏️
            </Button></td>
            {showModal && createPortal(
                <EventListModal onClose={() => setShowModal(false)}
                    event={event} />,
                document.body
            )}

            <td align="center"><Button variant="soft" color="danger" onClick={deleteEvent}>❌</Button></td>
        </>
    )
}

export default EventListButtons