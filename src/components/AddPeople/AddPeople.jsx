import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AddPeople() {


    const user = useSelector((store) => store.user)

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [notes, setNotes] = useState('');
    const [followUpDate, setFollowUpDate] = useState('');

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
            userId: user.id
            // event_complete: false
        }

        console.log(peopleReducerInput)

        dispatch({
            type: 'SET_PERSON_POST',
            payload: peopleReducerInput
        });

        setName('')
        setDate('')
        setCompany('')
        setPhone('')
        setNotes('')
        setFollowUpDate('')

        history.push('/people')
    }

    return (
        <Paper elevation='6'>
            <div>
                <Box
                    display="flex"
                    justifyContent="center"
                    sx={{ py: 4 }}>
                    <Typography variant="h3" color="#235179">Add Person</Typography>
                </Box>
            </div>
            <Box
                display="flex"
                flexDirection="column"
                alignContent="center"
                sx={{ py: 4 }}>
                <form onSubmit={handleSubmit}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center">
                        <Box
                            display="flex"
                            flexDirection="column">
                            <input required value={name} placeholder="Person's Name" type="text" onChange={(event) => setName(event.target.value)}></input>
                            <input required value={date} placeholder="Date" type="text" onChange={(event) => setDate(event.target.value)}></input>
                            <input value={company} placeholder="Company" type="text" onChange={(event) => setCompany(event.target.value)}></input>
                            <input value={phone} placeholder="Phone" type="text" onChange={(event) => setPhone(event.target.value)}></input>
                            <input required value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></input>
                            <input required value={followUpDate} placeholder="Follow-up Date" type="text" onChange={(event) => setFollowUpDate(event.target.value)}></input>
                            <Box>
                                <button type='submit'>Submit</button>
                                <button type='nevermind'>Nevermind</button>
                            </Box>
                        </Box>
                    </Box>
                </form>

            </Box>
        </Paper>
    )
}

export default AddPeople