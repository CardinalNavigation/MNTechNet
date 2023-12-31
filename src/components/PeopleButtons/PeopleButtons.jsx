import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createPortal } from "react-dom";
import { useState } from "react";

import PeopleEditModal from "../PeopleEditModal/PeopleEditModal"
import { Button } from "@mui/joy";
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

function PeopleButtons(props) {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector((store) => store.user)
    let userId = user.id

    let person = props.person

    const deletePerson = () => {
        console.log("Person ID is:", props.person.id, "The button is working")
        dispatch({
            type: "DELETE_PERSON_DATA",
            payload: {
                id: props.person.id,
                userId: userId
            }
        });
    };

    return (
        <>
            <td align="center">
                <Button variant="soft" color="warning" size="md"
                    onClick={() => setShowModal(true)}>
                    <EditNoteRoundedIcon></EditNoteRoundedIcon>
                </Button></td>
            {showModal && createPortal(
                <PeopleEditModal onClose={() => setShowModal(false)}
                    person={person} />,
                document.body
            )}
            <td align="center" >
                <Button variant="soft" color="danger" size="md" onClick={deletePerson}>
                    <ClearOutlinedIcon></ClearOutlinedIcon>
                </Button>
            </td>
        </>
    )
}

export default PeopleButtons