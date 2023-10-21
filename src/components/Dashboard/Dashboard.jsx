import React from "react";
import { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Paper } from "@mui/material";
import DashboardEventItem from "../DashboardEventItem/DashboardEventItem";
import DashboardPeopleItem from "../DashboardPeopleItem/DashboardPeopleItem";
import { Sheet, Table } from "@mui/joy";

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

  const dispatch = useDispatch();

  const eventReducerToThree = (reducer) => {
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
    <Paper elevation='6'>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ py: 2, backgroundColor: "white", paddingTop: "36px" }}
          marginLeft="25%"
          marginRight="25%">
          <Typography variant="h3" color="#235179">Dashboard</Typography>
        </Box>
        <Box
          flexDirection="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ py: 2, backgroundColor: 'white' }}
          marginLeft="25%"
          marginRight="25%">
          <Paper elevation="3">
            <Typography
              variant="h4"
              color="#80AEB6"
              textAlign="center">
              Upcoming Events
            </Typography>
            <Sheet>
              <Table
                borderAxis="none"
                variant="soft"
                hoverRow>
                <thead >
                  <tr>
                    <th style={{ textAlign: 'center' }}>Event</th>
                    <th style={{ textAlign: 'center' }}>Event Date</th>
                    <th style={{ textAlign: 'center' }}>Mark Complete</th>
                  </tr>
                </thead>
                <tbody>
                  {closestThreeEvents.map((event) => (
                    <DashboardEventItem key={event.id} event={event} />
                  ))}
                </tbody>
              </Table>
            </Sheet>
          </Paper>
        </Box>
        <Box flexDirection="column"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ py: 2, backgroundColor: 'white', paddingBottom: "36px" }}
          marginLeft="25%"
          marginRight="25%">
          <Paper elevation="3">
            <Typography
              variant="h4"
              color="#80AEB6"
              textAlign="center">
              People to Follow-up With
            </Typography>
            <Sheet>
              <Table borderAxis="none"
                variant="soft"
                hoverRow>
                <thead >
                  <tr>
                    <th style={{ textAlign: 'center' }}>Person</th>
                    <th style={{ textAlign: 'center' }}>Follow-Up Date</th>
                    <th style={{ textAlign: 'center' }}>Mark Complete</th>
                  </tr>
                </thead>
                <tbody>
                  {closestThreePeople.map((person) => (
                    <DashboardPeopleItem key={person.id} person={person} />
                  ))}
                </tbody>
              </Table>
            </Sheet>
          </Paper>
        </Box>
      </Box>
    </Paper>
  );
}

export default Dashboard;
