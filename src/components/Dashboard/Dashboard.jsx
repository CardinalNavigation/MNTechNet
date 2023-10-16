import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";

function Dashboard() {

   const eventReducer = useSelector((store) => store.eventReducer.eventReducer);
   const peopleReducer = useSelector((store) => store.peopleReducer.peopleReducer);
   const user = useSelector((store) => store.user)

   const dispatch = useDispatch();

   let closestThreeEvents = eventReducer.slice(0, 3)
   console.log("Sliced Reducer Looks Like:", closestThreeEvents)
   let closestThreeFollowUps = peopleReducer.slice(0, 3)
   console.log("Sliced Reducer Looks Like:", closestThreeFollowUps)

   const pageLoad = (reducer) => {

   }

   const peopleCompleteButtonClicked = () => {
      (console.log('clicked'))

   }
   const eventCompleteButtonClicked = () => {
      (console.log('clicked'))

   }

   useEffect(() => {
      dispatch({
         type: 'FETCH_EVENT_DATA',
         payload: user.id
      });
      dispatch({
         type: 'FETCH_PERSON_DATA',
         payload: user.id
      });

   }, []);

   return (
      <div>
         <h1>Dashboard</h1>
         <div>
            <h2>Upcoming Events</h2>
            <div>
               <ul>
                  {closestThreeEvents.map((event) => (
                     <div>
                        <li key={event.id}>
                           {event.event_name} on {event.formatted_date} <button onClick={eventCompleteButtonClicked}>✅</button>
                        </li>

                     </div>
                  ))}
               </ul>
            </div>
            <h2>People to Follow-up With</h2>
            <div>
               <ul>
                  {closestThreeFollowUps.map((person) => (
                     <div>
                        <li key={person.id}>
                           {person.name} Follow Up On {person.follow_up_date} <button onClick={peopleCompleteButtonClicked}>✅</button>
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