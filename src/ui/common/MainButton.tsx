import React from "react";
import { Button } from "@mui/material";

export function MainButton({ children, onClick }) {
    return (
        <div className="button">
            <Button variant="outlined" onClick={onClick}>
                {children}
            </Button>
        </div>
    );
}
