import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { ListItemContent } from "@mui/joy";

export default function DashboardEventItem({ event }) {
  // console.log("event is:", props)

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const eventCompleteButtonClicked = () => {
    let eventCompleteStatus = true;

    let eventComplete = {
      userId: user.id,
      id: event.id,
      eventCompleteStatus: eventCompleteStatus,
    };
    console.log("Profile Update Object Looks Like", eventComplete);

    dispatch({
      type: "UPDATE_EVENT_COMPLETE_DATA",
      payload: eventComplete,
    });
  };

  return (
    <>
      <ListItem key={event.id}>
        <ListItemButton  variant="soft">
          <ListItemContent>
            {event.event_name} on {event.formatted_date}
            <Button variant="contained" onClick={eventCompleteButtonClicked}>
              <CheckIcon></CheckIcon>
            </Button>
          </ListItemContent>
        </ListItemButton>
      </ListItem>
    </>
  );
}
