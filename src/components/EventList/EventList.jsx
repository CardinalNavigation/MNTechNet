import React from "react";
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import EventListModal from "../EventListModal/EventListModal"

import "./EventList.css";
import EventListButtons from "../EventListButtons/EventListButtons";
import { Box, Paper, Typography } from "@mui/material";
import { Sheet, Table } from "@mui/joy";

function EventList() {

    const eventReducer = useSelector((store) => store.eventReducer.eventReducer);
    const user = useSelector((store) => store.user)
    let userId = user.id
    // console.log(user.id)
    // console.log("Event Reducer Looks Like:", eventReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_EVENT_DATA', payload: userId });
    }, []);

    return (
        <>
            <Paper elevation='6'>
                <Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        sx={{ py: 2, paddingTop: "32px" }}>
                        <Typography variant="h3" color="#235179">Event List</Typography>
                    </Box>
                    <Box
                        display="flex"
                        justifyContent="center"
                        sx={{ py: 2, backgroundColor: "white", paddingTop: "16px", paddingBottom: "32px" }}
                        marginLeft="3%"
                        marginRight="3%">
                        <Paper elevation="3">
                            <Sheet>
                                <Table
                                    color="neutral"
                                    size="lg"
                                    stripe="odd"
                                    variant="soft"
                                    hoverRow>
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: 'center' }}>Event Name</th>
                                            <th style={{ textAlign: 'center' }}>Date</th>
                                            <th style={{ textAlign: 'center' }}>Time</th>
                                            <th style={{ textAlign: 'center' }}>Address</th>
                                            <th style={{ textAlign: 'center' }}>Notes</th>
                                            <th style={{ textAlign: 'center' }}>Edit</th>
                                            <th style={{ textAlign: 'center' }}>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eventReducer.map((event) => (
                                            <tr key={event.id}>
                                                <td align="center">{event.event_name}</td>
                                                <td align="center">{event.formatted_date}</td>
                                                <td align="center">{event.time}</td>
                                                <td align="center">{event.address}</td>
                                                <td align="center">{event.notes}</td>
                                                <EventListButtons event={event} />
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
        </>
    )
}

export default EventList