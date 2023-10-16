import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PeopleEditModal(props) {

    const [name, setName] = useState(props.person.name);
    const [date, setDate] = useState(props.person.formatted_date);
    const [company, setCompany] = useState(props.person.company);
    const [phone, setPhone] = useState(props.person.phone);
    const [notes, setNotes] = useState(props.person.notes);
    const [followUpDate, setFollowUpDate] = useState(props.person.follow_up_date);

    const user = useSelector((store) => store.user)
    let userId = user.id

    const dispatch = useDispatch();

    // console.log("in People Modal:", props)
    // console.log("in People Modal:", props.onClose)
    // console.log("People Name is:", name)

    const handleSubmit = () => {
        console.log("Test")
        event.preventDefault();


        let personUpdateData = {
            id:props.person.id,
            name: name,
            date: date,
            company: company,
            phone: phone,
            notes: notes,
            followUpDate: followUpDate,
            userId:userId
        }
        console.log("Profile Update Object Looks Like", personUpdateData)

        dispatch({
            type: 'UPDATE_PERSON_DATA',
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
                            <input value={date} placeholder="mm/dd/yyyy" type="text" onChange={(event) => setDate(event.target.value)}></input>
                            <h4>Company: {props.person.company}</h4>
                            <input value={company} placeholder="Company" type="text" onChange={(event) => setCompany(event.target.value)}></input>
                            <h4>Phone: {props.person.phone}</h4>
                            <input value={phone} placeholder="Phone" type="text" onChange={(event) => setPhone(event.target.value)}></input>
                            <h4>Notes: {props.person.notes}</h4>
                            <input value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></input>
                            <h4>Follow-Up Date: {props.person.follow_up_date}</h4>
                            <input value={followUpDate} placeholder="mm/dd/yyyy" type="text" onChange={(event) => setFollowUpDate(event.target.value)}></input>
                            <button type='submit'>Save</button>
                            <button type='nevermind' onClick={props.onClose}>Nevermind</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )

}