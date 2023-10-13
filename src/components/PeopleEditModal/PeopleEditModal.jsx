import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function PeopleEditModal(props) {

    const [name, setName] = useState(props.person.name);
    const [date, setDate] = useState(props.person.formatted_date);
    const [company, setCompany] = useState(props.person.phone);
    const [phone, setPhone] = useState(props.person.phone);
    const [notes, setNotes] = useState(props.person.notes);
    const [followUpDate, setFollowUpDate] = useState(props.person.follow_up_date);

    const dispatch = useDispatch();

    // console.log("in People Modal:", props)
    // console.log("in People Modal:", props.onClose)
    // console.log("People Name is:", name)

    const handleSubmit = () => {
        console.log("Test")
        event.preventDefault();


        let personUpdateData = {
            name: name,
            date: date,
            company: company,
            phone: phone,
            notes: notes,
            followUpDate: followUpDate,
        }
        console.log("Profile Update Object Looks Like", personUpdateData)

        dispatch({
            type: 'UPDATE_PERSON_INFO',
            payload: personUpdateData
        });
        props.onClose()
    }

    return (
        <>

            <div className="modal">
                <div className="overlay">
                    <div className="modal-content">
                        <h1>Edit This Person's Details</h1>
                        <form onSubmit={handleSubmit}>
                            <h4>Name: {props.person.name}</h4>
                            <input value={name} placeholder="Name" type="text" onChange={(event) => setName(event.target.value)}></input>
                            <h4>Date: {props.person.formatted_date}</h4>
                            <input value={date} placeholder="Date" type="text" onChange={(event) => setDate(event.target.value)}></input>
                            <h4>Company: {props.person.company}</h4>
                            <input value={company} placeholder="Company" type="text" onChange={(event) => setCompany(event.target.value)}></input>
                            <h4>Phone: {props.person.phone}</h4>
                            <input value={phone} placeholder="Phone" type="text" onChange={(event) => setPhone(event.target.value)}></input>
                            <h4>Location: {props.person.notes}</h4>
                            <input value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></input>
                            <h4>Notes: {props.person.follow_up_date}</h4>
                            <input value={followUpDate} placeholder="Follow-up Date" type="text" onChange={(event) => setFollowUpDate(event.target.value)}></input>
                            <button type='submit'>Save</button>
                            <button type='nevermind' onClick={props.onClose}>Nevermind</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )

}