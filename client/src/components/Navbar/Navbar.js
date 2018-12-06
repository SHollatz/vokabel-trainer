import React from "react";
import "./Navbar.css";

const Navbar = props => (
  <nav>
    <div className="container">
      <h1 id="home-h1"><a id="home" href="/">Home</a></h1>
      <div className="navigation">
        <a id="games" href="/games">Play!</a>
        <a id="words" href="/words">Add Words</a>
        <a id="feedback" href="mailto:deb@ztallohs@gmail.com">Feedback</a>
        <a id="about" href="/about">About</a>
        <a id="login" href="/login">Login</a>
        {/* <a href="/signUp">Sign up</a> */}
      </div>
    </div>
  </nav>
);

export default Navbar;