import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Games from "./pages/Games";
import WordList from "./pages/WordList";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Exterior from "./components/Exterior";
import About from "./pages/About";
import "./App.css";

const App = () => (
  <Router>
    <Exterior>
      <Navbar />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/words/:id" component={WordList} />
          <Route exact path="/words/nouns" component={WordList} />
          <Route exact path="/words/verbs" component={WordList} />
          <Route exact path="/words/adjectives" component={WordList} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Wrapper>
      <Footer />
    </Exterior>
  </Router>
);

export default App;

