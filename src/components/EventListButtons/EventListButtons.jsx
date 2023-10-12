import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function EventListButtons(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    const deleteEvent = () => {
        console.log("Event ID is:", props.event.id, "The button is working")
        dispatch({ type: "DELETE_EVENT_DATA", payload: { id: props.event.id } });
    };

    const editEvent= () =>{
        history.push('/eventListEdit')
    }

    return (
        <>
            <td><button onClick={editEvent}>✏️</button></td>
            <td><button onClick={deleteEvent}>❌</button></td>
        </>
    )
}

export default EventListButtons