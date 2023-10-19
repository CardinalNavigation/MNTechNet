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
    <Box>
      <ListItem key={event.id}>
        <ListItemButton variant="soft">
          <ListItemContent>
            <Typography variant="body1">{event.event_name} on {event.formatted_date}</Typography>
          </ListItemContent>
          <Button variant="contained" size="small" onClick={eventCompleteButtonClicked}>
            <CheckIcon fontSize="small"></CheckIcon>
          </Button>
        </ListItemButton>
      </ListItem>
    </Box>
  );
}
