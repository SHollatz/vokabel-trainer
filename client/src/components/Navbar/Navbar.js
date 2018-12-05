import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a href="/">Home</a>
      <a href="/games">Games</a>
      <a id="/words" href="/words">Add Words</a>
      <a id="/feedback" href="mailto:deb@ztallohs@gmail.com">Feedback</a>
      <a id="/about" href="/about">About</a>
      <a href="/login">Login</a>
      <a href="/signUp">Sign up</a>
    </div>
  </nav>
);

export default Navbar;