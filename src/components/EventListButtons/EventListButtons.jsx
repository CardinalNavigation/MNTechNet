import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPortal } from "react-dom";
import { useState } from "react";
import EventListModal from "../EventListModal/EventListModal"
import { Button } from "@mui/joy";
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

function EventListButtons(props) {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

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
            <td align="center"><Button variant="soft" color="warning" size="md" onClick={() => setShowModal(true)}>
                <EditNoteRoundedIcon></EditNoteRoundedIcon>
            </Button></td>
            {showModal && createPortal(
                <EventListModal onClose={() => setShowModal(false)}
                    event={event} />,
                document.body
            )}

            <td align="center">
                <Button variant="soft" color="danger" size="md" onClick={deleteEvent}>
                    <ClearOutlinedIcon></ClearOutlinedIcon>
                </Button>
            </td>
        </>
    )
}

export default EventListButtons