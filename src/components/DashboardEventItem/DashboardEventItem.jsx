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

export default function DashboardEventItem(props) {
    // console.log("event is:", props)

  const eventCompleteButtonClicked = () => {
    console.log("clicked", props.event.event_name);
    function completeButton() {}
  };

  return (
    <>
      <ListItem key={props.event.id}>
        <ListItemButton color="primary" variant="plain">
          <ListItemContent>
            {props.event.event_name} on {props.event.formatted_date}
            <Button variant="contained" onClick={eventCompleteButtonClicked}>
              <CheckIcon></CheckIcon>
            </Button>
          </ListItemContent>
        </ListItemButton>
      </ListItem>
    </>
  );
}
