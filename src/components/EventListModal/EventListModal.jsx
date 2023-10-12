import React from "react";
import { useState } from "react";
export default function EventListModal() {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <button className="btn-modal">
                Edit
            </button>
            <div className="modal">
                <div onClick={toggleModal} className="overlay"
                >
                    <div className="modal-content"></div>
                </div>
                <h1>Wow you did it Matt!</h1>
                <p>Hello</p>
            </div>
            <button onClick={toggleModal} className="close-modal" >Save</button>
        </>
    )

}