import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./SignIn"; // Import the LoginPage component

// Render the LoginPage component into the root element
ReactDOM.render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
  document.getElementById("root")
);
