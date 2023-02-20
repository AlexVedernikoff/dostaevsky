import React from "react";
import "../src/styles/App.css";
import "./styles/MainStyles.scss";
import MainLayout from "./ui/MainLayout";
import { Provider } from "react-redux";
import store from "./store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <MainLayout />
            </Provider>
        </div>
    );
}

export default App;
