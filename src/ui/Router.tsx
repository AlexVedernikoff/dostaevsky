import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./Auth";
import App from "../App";

export interface IApplicationProps {}

const Application: FC<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/operator" element={<App />} />
                <Route path="/operator/auth" element={<Auth />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Application;
