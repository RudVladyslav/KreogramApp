import React from 'react';
import Typography from "@mui/material/Typography";

const Header4 = ({children}) => {
    return (
        <Typography variant="h4" component="h4">
            {children}
        </Typography>
    );
};

export default Header4;
