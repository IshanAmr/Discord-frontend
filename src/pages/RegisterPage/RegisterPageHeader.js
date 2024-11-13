import React from "react";
import { Typography } from "@mui/material";

const RegisterPageHeader = () => {
    return (
        <>
          <Typography variant='h5' sx={{ color : 'white' }}>Welcome</Typography>
          <Typography sx={{ color : '#b9bbbe'}}>Thanks for registering!</Typography>
        </>
    )
}

export default RegisterPageHeader;