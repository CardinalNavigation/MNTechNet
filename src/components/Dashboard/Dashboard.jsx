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

//   console.log("eventReducer:", eventReducer);
  console.log("peopleReducer:", peopleReducer);
  const dispatch = useDispatch();

  const eventReducerToThree = (reducer) => {
   //  console.log("This is the Event Array Passed In:", reducer);

    let output = [];
    // some bit of logic that says: only do this, if the data is there.
    // this helps the page load when the reducer has not been filled but our GET dispatch yet. 
    if (reducer && reducer.length > 0) {
      output = reducer.filter((event) => {
        if (event.event_complete == false) {
          return event;
        }
      });
    }
    return output;
  };
  

  let closestThreeEvents = eventReducerToThree(eventReducer);

  const peopleReducerToThree = (reducer) => {
    console.log("This is the People Array Passed In:", reducer);

    let output = [];
    // some bit of logic that says: only do this, if the data is there.
    // this helps the page load when the reducer has not been filled but our GET dispatch yet. 
    if (reducer && reducer.length > 0) {
      output = reducer.filter((people) => {
         console.log(people)
        if (people.follow_up_complete == false) {
          return people;
        }
      });
    }
    return output;
  };
  

  let closestThreePeople = peopleReducerToThree(peopleReducer);
  console.log("Closest 3 People:",closestThreePeople)

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
              {closestThreePeople.map((person) => (
                <ListItem key={person.id}>
                  <ListItemButton color="primary" variant="plain">
                    <ListItemContent>
                      {person.name} follow up on {person.follow_up_date}
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
