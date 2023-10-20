import { Button } from "@mui/joy";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function RegistrationSuccess() {

    const history = useHistory();

    const handleClick = () => {
        history.push('/dashboard')
    }

    return (
        <Paper>
            <Box display="flex"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
                sx={{ py: 2 }}>
                <Typography variant="h3" color="#235179">Success</Typography>
                <Typography variant="h5" color="#80AEB6">Registration Successful!</Typography>
                <Button variant="solid" color="primary" size="lg" sx={{my: 2}}type="submit" onClick={handleClick}>Proceed to MNTechNet</Button>
            </Box>
        </Paper>
    )
}

export default RegistrationSuccess