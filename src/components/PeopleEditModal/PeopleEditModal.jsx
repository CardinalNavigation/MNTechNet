import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from '@mui/joy/Input';
import { Button, Textarea } from "@mui/joy";

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

    const handleSubmit = () => {
        console.log("Test")
        event.preventDefault();


        let personUpdateData = {
            id: props.person.id,
            name: name,
            date: date,
            company: company,
            phone: phone,
            notes: notes,
            followUpDate: followUpDate,
            userId: userId
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
                        <Paper elevation="6" sx={{ my: 5 }}>
                            <Box display="flex"
                                flexDirection="column"
                                alignContent="center"
                                sx={{ p: 6 }}>
                                <Box display="flex" alignItems="center" flexDirection="column">
                                    <Typography variant="h4" color="#235179">Edit Details</Typography>
                                </Box>
                                <form onSubmit={handleSubmit}>
                                    <Box display="flex"
                                        flexDirection="column"
                                        alignItems="stretch" >
                                        <Box display="flex"
                                            flexDirection="column">
                                            <Typography variant="h6" color="#80AEB6">Name:</Typography>
                                            <Input color="primary" variant="outlined"
                                                value={name} placeholder="Name" type="text" onChange={(event) => setName(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Date:</Typography>
                                            <Input color="primary" variant="outlined"
                                                value={date} placeholder="mm/dd/yyyy" type="text" onChange={(event) => setDate(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Company:</Typography>
                                            <Input color="primary" variant="outlined"
                                                value={company} placeholder="Company" type="text" onChange={(event) => setCompany(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Phone:</Typography>
                                            <Input color="primary" variant="outlined"
                                                value={phone} placeholder="Phone" type="text" onChange={(event) => setPhone(event.target.value)}></Input>
                                            <Typography variant="h6" color="#80AEB6">Notes:</Typography>
                                            <Textarea color="primary" variant="outlined"
                                                value={notes} placeholder="Notes" type="text" onChange={(event) => setNotes(event.target.value)}></Textarea>
                                            <Typography variant="h6" color="#80AEB6">Follow-Up Date:</Typography>
                                            <Input color="primary" variant="outlined"
                                                value={followUpDate} placeholder="mm/dd/yyyy" type="text" onChange={(event) => setFollowUpDate(event.target.value)}></Input>
                                        </Box>
                                        <Box sx={{ py: 2 }}>
                                            <Button variant="soft" color="primary" size="lg" sx={{ m: 2 }} type='submit'>Save</Button>
                                            <Button variant="soft" color="danger" size="lg" type='nevermind' onClick={props.onClose}>Nevermind</Button>
                                        </Box>
                                    </Box>
                                </form>
                            </Box>
                        </Paper>
                    </div>
                </div>
            </div>

        </>
    )

}