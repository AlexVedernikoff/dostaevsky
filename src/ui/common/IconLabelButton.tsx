import React from "react";
import Button from "@mui/material/Button";

export const IconLabelButton = ({ children, iconName, onClick }) => {
    return (
        <div className="button">
            <Button variant="outlined" startIcon={iconName} onClick={onClick}>
                {children}
            </Button>
        </div>
    );
};
