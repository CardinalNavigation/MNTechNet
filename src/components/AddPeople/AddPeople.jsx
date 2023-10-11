import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AddPeople() {

    const [name, setName] = useState('Matthew');
    const [date, setDate] = useState('10/10/23');
    const [company, setCompany] = useState('PrimeDigital Academy');
    const [phone, setPhone] = useState('111-111-1111');
    const [notes, setNotes] = useState('This is the guy who stood on his head while saying the alphabet backwards');
    const [followUpDate, setFollowUpDate] = useState('10/22/23');

    // Use Dispatch and History to send to the redux saga, which sends to server and ultimately our
    // SQL database
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        //event.preventDefault prevents the page from automatically refreshing and deleting our input data
        event.preventDefault()
        //eventReducerInput is our package which we are sending to the server
        let peopleReducerInput = {
            name: name,
            date: date,
            company: company,
            phone: phone,
            notes: notes,
            followUpDate: followUpDate,
            // event_complete: false
        }

        console.log(peopleReducerInput)

        dispatch({
            type: 'SET_PERSON_POST',
            payload: peopleReducerInput
        });

        // setName('')
        // setDate('')
        // setCompany('')
        // setPhone('')
        // setNotes('')
        // setFollowUpDate('')

        // history.push('/people')
    }

    return (
        <div>
            <div>
                <h2>Add Person</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input value={name} placeholder="Person's Name" type="text" onChange={(event) => setName(event.target.value)}></input>
                    <input value={date} placeholder="Date" type="text" onChange={(event) => setDate(event.target.value)}></input>
                    <input value={company} placeholder="Company" type="text" onChange={(event) => setCompany(event.target.value)}></input>
                    <input value={phone} placeholder="Phone" type="text" onChange={(event) => setPhone(event.target.value)}></input>
                    <input value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></input>
                    <input value={followUpDate} placeholder="Follow-up Date" type="text" onChange={(event) => setFollowUpDate(event.target.value)}></input>
                    <button type='submit'>Submit</button>
                </form>
                <button type='nevermind'>Nevermind</button>
            </div>
        </div>
    )
}

export default AddPeople