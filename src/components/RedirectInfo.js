import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/material";

const RedirectText = styled('span')({
    color : '#00AFF4',
    fontWeight : 500,
    cursor : 'pointer'
})

const RedirectInfo = ({
    text,
    redirectText,
    additionalStyles,
    redirectHandler
}) => {
    return (
        <div>
           <Typography
              sx={{
                color : '#72767d'
              }}
              style={ additionalStyles ? additionalStyles : {}}
              variant="subtitle2"
           > 
             {text}
           <RedirectText onClick={redirectHandler}>
            {redirectText}
           </RedirectText>
           </Typography>
        </div>
    )
}

export default RedirectInfo;