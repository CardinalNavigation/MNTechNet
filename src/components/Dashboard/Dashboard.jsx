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
import { red } from "@mui/material/colors";

function Dashboard() {
  useEffect(() => {
    dispatch({
      type: "FETCH_EVENT_DATA",
      payload: user.id,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: "FETCH_PERSON_DATA",
      payload: user.id,
    });
  }, []);

  const user = useSelector((store) => store.user);
  const eventReducer = useSelector((store) => store.eventReducer.eventReducer);
  const peopleReducer = useSelector(
    (store) => store.peopleReducer.peopleReducer
  );

  console.log("eventReducer:", eventReducer);
  // console.log(eventReducer[0].event_complete)
  const dispatch = useDispatch();

  // let closestThreeEvents = eventReducer.slice(0, 3)
  let closestThreeFollowUps = peopleReducer.slice(0, 3);
  // console.log("Sliced Reducer Looks Like:", closestThreeFollowUps)

  const eventReducerToThree = (reducer) => {
    let blankArray = [];
    console.log("This is the Array Passed In:", reducer);

    let output = [];
    // some bit of logic that says: only do this, if the data is there.
    // this helps the page load when the reducer has not been filled but our GET dispatch yet. 
    if (reducer && reducer.length > 0) {
      output = reducer.filter((event) => {
        if (event.event_complete == false) {
          return event;
          // console.log("This is the Event array after the function Completed", blankArray)
        }
      });
    }
    return output;
  };

  let closestThreeEvents = eventReducerToThree(eventReducer);

  // const peopleReducerToThree = (reducer) => {
  //    let blankArray = []
  //    for (let i = 0; i < 3; i++) {
  //       console.log(reducer[i].follow_up_complete)
  //       if (reducer[i].follow_up_complete == false) {
  //          blankArray.push(reducer[i])
  //          console.log("This is the People array after the function Completed", blankArray)
  //       }
  //    }
  //    return blankArray
  // }

  // let closestThreeFollowUps = peopleReducerToThree([peopleReducer])

  const peopleCompleteButtonClicked = () => {
    console.log("clicked");
  };
  const eventCompleteButtonClicked = () => {
    console.log("clicked");
    function completeButton() {}
  };

  return (
    <div>
      <Typography level="">Dashboard</Typography>
      <div>
        <Typography level="h2">
          <h2>Upcoming Events</h2>
        </Typography>
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <List size="sm" variant="outlined">
              {closestThreeEvents.map((event) => (
                <ListItem key={event.id}>
                  <ListItemButton color="primary" variant="plain">
                    <ListItemContent>
                      {event.event_name} on {event.formatted_date}
                      <Button
                        variant="contained"
                        onClick={eventCompleteButtonClicked}
                      >
                        <CheckIcon></CheckIcon>
                      </Button>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </div>
        <h2>People to Follow-up With</h2>
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <List size="sm" variant="outlined">
              {closestThreeEvents.map((event) => (
                <ListItem key={event.id}>
                  <ListItemButton color="primary" variant="plain">
                    <ListItemContent>
                      {event.event_name} Follow Up on {event.formatted_date}
                      <Button
                        variant="contained"
                        onClick={eventCompleteButtonClicked}
                      >
                        <CheckIcon></CheckIcon>
                      </Button>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
