import React from "react";
import IconButton from "@mui/material/IconButton";

export function ImageButton({ children }) {
    return (
        <div className="button IconButton">
            <IconButton>{children}</IconButton>
        </div>
    );
}
