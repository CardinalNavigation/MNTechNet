import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Box, ListItem, ListItemButton, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Button, ListItemContent } from "@mui/joy";

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
    <tr key={person.id}>
      <td align="center">
        {person.name}
      </td>
      <td align="center">
        {person.follow_up_date}
      </td>
      <td align="center">
        <Button variant="solid" size="lg" onClick={peopleCompleteButtonClicked}>
          <CheckIcon fontSize="small"></CheckIcon>
        </Button>
      </td>
    </tr >
  );
}
