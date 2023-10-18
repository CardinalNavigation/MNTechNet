import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Button, ListItem, ListItemButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { ListItemContent } from "@mui/joy";

export default function DashboardEventItem({ person }) {
  // console.log("person is:", person);

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const peopleCompleteButtonClicked = () => {
    // console.log("clicked", person.name);

    let followupCompleteStatus = true;

    let personFollowUpData = {
      userId: user.id,
      id: person.id,
      followupCompleteStatus: followupCompleteStatus,
    };
    console.log("Profile Update Object Looks Like", personFollowUpData);

    dispatch({
      type: "UPDATE_FOLLOW_UP_DATA",
      payload: personFollowUpData,
    });
  };

  return (
    <>
      <ListItem key={person.id}>
        <ListItemButton color="primary" variant="plain">
          <ListItemContent>
            {person.name} follow up on {person.follow_up_date}
            <Button variant="contained" onClick={peopleCompleteButtonClicked}>
              <CheckIcon></CheckIcon>
            </Button>
          </ListItemContent>
        </ListItemButton>
      </ListItem>
    </>
  );
}
