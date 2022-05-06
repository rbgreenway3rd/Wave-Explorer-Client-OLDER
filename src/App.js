import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApplicationViews } from "./components/ApplicationViews";
import { Login } from "./components/auth/Login";
import { Route, Routes, Router, Navigate } from "react-router-dom";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<ApplicationViews />} />

        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <Button variant="contained" color="primary">
    //       Hello World
    //     </Button>
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div>
  );
}

export default App;
