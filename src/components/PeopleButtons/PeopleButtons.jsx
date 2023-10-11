import React from "react";
import { useDispatch } from "react-redux";

function PeopleButtons(props) {

    const dispatch = useDispatch();

    const deleteEvent = () => {
        console.log("Person ID is:", props.person.id, "The button is working")
        dispatch({ type: "DELETE_PERSON_DATA", payload: { id: props.person.id } });
    };

    return (
        <>
            <td><button>✏️</button></td>
            <td><button onClick={deleteEvent}>❌</button></td>
        </>
    )
}

export default PeopleButtons