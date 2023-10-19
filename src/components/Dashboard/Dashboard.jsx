import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, List, Typography, ListItem } from "@mui/material";
import DashboardEventItem from "../DashboardEventItem/DashboardEventItem";
import DashboardPeopleItem from "../DashboardPeopleItem/DashboardPeopleItem";

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
  //   console.log("peopleReducer:", peopleReducer);]
  const dispatch = useDispatch();

  const eventReducerToThree = (reducer) => {
    //  console.log("This is the Event Array Passed In:", reducer);
    // let closestThreeEvents = eventReducer.slice(0, 3);
    let output = [];
    // some bit of logic that says: only do this, if the data is there.
    // the if statement helps the page load when the reducer has not been filled by our GET dispatch yet.
    if (reducer && reducer.length > 0) {
      output = reducer.filter((event) => {
        if (event.event_complete == false) {
          return event
        }
      });
    }
    return output;
  };

  let closestThreeEvents = eventReducerToThree(eventReducer);
  closestThreeEvents = closestThreeEvents.slice(0, 3)

  const peopleReducerToThree = (reducer) => {
    //  console.log("This is the People Array Passed In:", reducer);

    let output = [];
    // some bit of logic that says: only do this, if the data is there.
    // the if statement helps the page load when the reducer has not been filled by our GET dispatch yet.
    if (reducer && reducer.length > 0) {
      output = reducer.filter((people) => {
        //   console.log(people);
        if (people.follow_up_complete == false) {
          return people;
        }
      });
    }
    return output;
  };

  let closestThreePeople = peopleReducerToThree(peopleReducer);
  closestThreePeople = closestThreePeople.slice(0, 3)


  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ py: 4 }}>
        <Typography variant="h3" color="#235179">Dashboard</Typography>
      </Box>
      <Box
        flexDirection="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ py: 2 }}>
        <Typography
          variant="h4"
          color="#80AEB6">
          Upcoming Events
        </Typography>
        <List size={'sm'} variant="outlined">
          {closestThreeEvents.map((event) => (
            <DashboardEventItem key={event.id} event={event} />
          ))}
        </List>
      </Box>
      <Box flexDirection="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ py: 2 }}>
          <Typography
            variant="h4"
            color="#80AEB6">
            People to Follow-up With
          </Typography>
          <List>
            {closestThreePeople.map((person) => (
              <DashboardPeopleItem key={person.id} person={person} />
            ))}
          </List>
      </Box>
    </Box>
  );
}

export default Dashboard;
