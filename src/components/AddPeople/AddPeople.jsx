import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Input from '@mui/joy/Input';
import { Button, Textarea } from "@mui/joy";
import AddReactionTwoToneIcon from '@mui/icons-material/AddReactionTwoTone';

function AddPeople() {

    const user = useSelector((store) => store.user)

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');
    const [notes, setNotes] = useState('');
    const [followUpDate, setFollowUpDate] = useState('');

    // Use Dispatch and History to send to the redux saga, 
    // which sends to server and ultimately our
    // SQL database
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = () => {
        //event.preventDefault prevents the page from automatically refreshing and deleting our Input data
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

    const nevermindButton = () => {
        console.log("User Said Nevermind")
        history.push('/dashboard')
    }

    const handleHover = () => {
        setName('Josh Kelmens');
        setDate("10-31-23")
        setCompany("Deep Minn")
        setPhone('763-566-0088')
        setNotes('He let me know he is fairly busy right now, and not hiring, but to touch base with him in a month and a half.')
        setFollowUpDate('2/28/24')
    };

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
                            <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg"
                                required value={name} placeholder="Person's Name" type="text" onChange={(event) => setName(event.target.value)}></Input>
                            <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg"
                                required value={date} placeholder="Date" type="text" onChange={(event) => setDate(event.target.value)}></Input>
                            <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg"
                                value={company} placeholder="Company" type="text" onChange={(event) => setCompany(event.target.value)}></Input>
                            <Input color="primary" variant="outlined" sx={{ my: 1 }} size="lg"
                                value={phone} placeholder="Phone" type="text" onChange={(event) => setPhone(event.target.value)}></Input>
                            <Textarea color="primary" variant="outlined" sx={{ my: 1 }} size="lg"
                                required value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></Textarea>
                            <Input onMouseEnter={handleHover} color="primary" variant="outlined" sx={{ my: 1 }} size="lg"
                                required value={followUpDate} placeholder="Follow-up Date" type="text" onChange={(event) => setFollowUpDate(event.target.value)}></Input>
                            <Box>
                                <Button variant="soft" color="primary" size="lg" sx={{ mx: 2 }} type='submit'>Submit  <AddReactionTwoToneIcon></AddReactionTwoToneIcon></Button>
                                <Button variant="soft" color="danger" size="lg" type='nevermind' onClick={nevermindButton}>Nevermind</Button>
                            </Box>
                        </Box>
                    </Box>
                </form>

            </Box>
        </Paper>
    )
}

export default AddPeople