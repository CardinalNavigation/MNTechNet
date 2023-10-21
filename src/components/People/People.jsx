import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PeopleButtons from "../PeopleButtons/PeopleButtons";
import { Box, Paper, Typography } from "@mui/material";
import { Sheet, Table } from "@mui/joy";

function People() {

    const peopleReducer = useSelector((store) => store.peopleReducer.peopleReducer);
    const user = useSelector((store) => store.user)
    let userId = user.id
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: 'FETCH_PERSON_DATA', payload: userId });
    }, []);

    return (
        <Paper elevation='6'>
            <Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    sx={{ py: 2, paddingTop: "32px" }}>
                    <Typography variant="h3" color="#235179">People</Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    sx={{ py: 2, backgroundColor: "white", paddingTop: "16px", paddingBottom: "32px" }}
                    marginLeft="3%"
                    marginRight="3%">
                    <Paper elevation="3">
                        <Sheet variant="soft">
                            <Table
                                color="neutral"
                                size="lg"
                                stripe="odd"
                                variant="soft"
                                hoverRow
                                noWrap
                            >
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'center' }}>Person</th>
                                        <th style={{ textAlign: 'center' }}>Date</th>
                                        <th style={{ textAlign: 'center' }}>Company</th>
                                        <th style={{ textAlign: 'center' }}>Phone</th>
                                        <th style={{ textAlign: 'center' }}>Notes</th>
                                        <th style={{ textAlign: 'center' }}>Follow-Up Date</th>
                                        <th style={{ textAlign: 'center' }}>View/Edit</th>
                                        <th style={{ textAlign: 'center' }}>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {peopleReducer.map((person) => (
                                        <tr key={person.id}>
                                            <td align="center">{person.name}</td>
                                            <td align="center">{person.formatted_date}</td>
                                            <td align="center">{person.company}</td>
                                            <td align="center" >{person.phone}</td>
                                            <td align="center">{person.notes}</td>
                                            <td align="center" >{person.follow_up_date}</td>
                                            <PeopleButtons person={person} />
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </Table>
                        </Sheet>
                    </Paper>
                </Box>
            </Box>
        </Paper>
    )
}

export default People