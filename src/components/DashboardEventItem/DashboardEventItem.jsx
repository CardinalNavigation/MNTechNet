import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {Typography} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Button} from "@mui/joy";

export default function DashboardEventItem({ event }) {

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
    <tr key={event.id}>
      <td align="center">
        <Typography variant="body1">{event.event_name}</Typography>
      </td>
      <td align="center">
        <Typography variant="body1">{event.formatted_date}</Typography>
      </td>
      <td align="center">
        <Button variant="solid" size="medium" onClick={eventCompleteButtonClicked}>
          <CheckIcon fontSize="medium"></CheckIcon>
        </Button>
      </td>
    </tr>
  );
}
