import React, { Component, useState } from "react";

import { Navigate } from "react-router-dom";

export function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      user_id: "admin",
      user_password: "123",
    },
  ];

  const errors = {
    u_id: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { u_id, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.user_id === u_id.value);

    // Compare user info
    if (userData) {
      if (userData.user_password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "u_id", message: errors.u_id });
    }
    localStorage.setItem("token", "waveexplorer_token");
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="u_id" required />
          {renderErrorMessage("u_id")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <Navigate to="/" /> : renderForm}
      </div>
    </div>
  );
}
