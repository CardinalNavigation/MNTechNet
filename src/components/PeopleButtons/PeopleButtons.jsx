import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createPortal } from "react-dom";
import { useState } from "react";

function PeopleButtons(props) {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    let person = props.event

    const deletePerson = () => {
        console.log("Person ID is:", props.person.id, "The button is working")
        dispatch({ type: "DELETE_PERSON_DATA", payload: { id: props.person.id } });
    };

    return (
        <>
            <td><button onClick={() => setShowModal(true)}>
                ✏️
            </button></td>
            {showModal && createPortal(
                <PeopleEditModal onClose={() => setShowModal(false)}
                    person={person} />,
                document.body
            )}
            <td><button onClick={deletePerson}>❌</button></td>
        </>
    )
}

export default PeopleButtons