import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import PeopleButtons from "../PeopleButtons/PeopleButtons";

function People (){
    
    const peopleReducer = useSelector((store) => store.peopleReducer.peopleReducer);
    console.log("People Reducer Looks Like:", peopleReducer)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: 'FETCH_PERSON_DATA' });
    }, []);

    return (
        <>
            <div>
                <h2>People</h2>
                <table>
                    <thead>
                        <tr>
                        <th>Person</th>
                        <th>Date</th>
                        <th>Company</th>
                        <th>Phone</th>
                        <th>Notes</th>
                        <th>Follow-Up Date</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                {peopleReducer.map((person) => (
                    <tr key={person.id}>
                        <td>{person.name}</td>
                        <td>{person.formatted_date}</td>
                        <td>{person.company}</td>
                        <td>{person.phone}</td>
                        <td>{person.notes}</td>
                        <td>{person.follow_up_date}</td>
                       <PeopleButtons person={person}/>
                    </tr>
                ))
                }
                </tbody>
                </table>
            </div>
        </>
    )
}

export default People