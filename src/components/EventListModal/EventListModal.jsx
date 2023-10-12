import React from "react";
import { useState } from "react";

export default function EventListModal({ onClose }) {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        console.log(modal)
        setModal(!modal)
    }

    return (
        <>

            <div className="modal">
                <div onClick={ onClose } className="overlay">
                    <div className="modal-content">
                        <h1>Wow you did it Matt!</h1>
                    </div>
                </div>
                <button onClick={ onClose } className="close-modal" >Save</button>
            </div>

        </>
    )

}