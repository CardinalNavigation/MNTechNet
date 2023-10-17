import React from "react"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Button, List, ListItem, ListItemButton, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

function Dashboard() {


   useEffect(() => {
      dispatch({
         type: 'FETCH_EVENT_DATA',
         payload: user.id
      });
   }, []);

   useEffect(() => {
      dispatch({
         type: 'FETCH_PERSON_DATA',
         payload: user.id
      });
   }, []);

   const user = useSelector((store) => store.user)
   const eventReducer = useSelector((store) => store.eventReducer.eventReducer);
   const peopleReducer = useSelector((store) => store.peopleReducer.peopleReducer);

   // console.log('eventReducer:', eventReducer)
   // console.log(eventReducer[0].event_complete)
   const dispatch = useDispatch();

   let closestThreeEvents = eventReducer.slice(0, 3)
   let closestThreeFollowUps = peopleReducer.slice(0, 3)
   // console.log("Sliced Reducer Looks Like:", closestThreeFollowUps)

   // const eventReducerToThree = (reducer) => {
   //    let blankArray = []
   //    for (let i = 0; i < 3; i++) {
   //       console.log(reducer[i].event_complete)
   //       if (reducer[i].event_complete == false) {
   //          blankArray.push(reducer[i])
   //          console.log("This is the Event array after the function Completed", blankArray)
   //       }
   //    }
   //    return blankArray
   // }

   // let closestThreeEvents = eventReducerToThree(eventReducer)

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
      (console.log('clicked'))

   }
   const eventCompleteButtonClicked = () => {
      (console.log('clicked'))
      function completeButton() {

      }


   }


   return (
      <div>
         <h1>Dashboard</h1>
         <div>
            <h2>Upcoming Events</h2>
            <div>
               <List>
                  {closestThreeEvents.map((event) => (
                     <div>
                        <ListItem variant="solid" key={event.id}>
                           <ListItemButton variant="outlined">
                           {event.event_name} on {event.formatted_date} <Button variant="contained" onClick={eventCompleteButtonClicked}><CheckIcon></CheckIcon></Button>
                           </ListItemButton>
                        </ListItem>
                     </div>
                  ))}
               </List>
            </div>
            <h2>People to Follow-up With</h2>
            <div>
               <ul>
                  {closestThreeFollowUps.map((person) => (
                     <div>
                        <li key={person.id}>
                           {person.name} Follow Up On {person.follow_up_date} <Button variant="contained" onClick={peopleCompleteButtonClicked}><CheckIcon></CheckIcon></Button>
                        </li>
                     </div>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Dashboard