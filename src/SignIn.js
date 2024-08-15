// SignIn.js
import React, { useState } from "react";
import "./SignIn.css";
import FacebookButton from "./facebook"; // Import FacebookButton component
import GoogleButton from "./google"; // Import GoogleButton component
import Animation from "./Ishan"; // Import Animation component

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      console.log(`Username: ${username}, Password: ${password}`);
    } else {
      console.error("Please fill in both fields.");
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <Animation />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your username"
            />
          </label>
          <br />
          <label htmlFor="password">
            Password:
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
            />
            <span
              className="show-password"
              onClick={handleShowPassword}
              role="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </label>
          <br />
          <div className="container">
            <button type="submit" className="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        <GoogleButton />
      </div>
      <br />
      <div className="container">
        <FacebookButton />
      </div>
    </div>
  );
};

export default SignIn;
