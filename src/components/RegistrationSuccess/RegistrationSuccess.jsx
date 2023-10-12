import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function RegistrationSuccess(){

    const history = useHistory();

    const handleClick = () => {
        history.push('/dashboard')
    }

    return (
        <>
        <h1>Success</h1>
        <h3>Registration Successful!</h3>
        <button className="btn" type="submit" onClick={handleClick}>Proceed to MNTechNet</button>
        </>
    )
}

export default RegistrationSuccess