import React from "react";
import Box from "@mui/material/Box";
import "../styles/Sidebar.scss";
import Sidebar from "./Sidebar";
import Orders from "./Orders";

function MainLayout() {
    return (
        <Box sx={{ display: "flex", gap: "16px" }}>
            <div className="Sidebar">
                <Sidebar />
            </div>
            <Orders />
        </Box>
    );
}

export default MainLayout;
