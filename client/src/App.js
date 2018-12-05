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
import "./App.css";

const App = () => (
  <Router>
      <Navbar />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:id" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/noun" component={WordList} />
          <Route exact path="/noun/:id" component={WordList} />
          <Route exact path="/verb" component={WordList} />
          <Route exact path="/verb/:id" component={WordList} />
          <Route exact path="/adjective" component={WordList} />
          <Route exact path="/adjective/:id" component={WordList} />
          <Route exact path="/signUp" component={SignUp} />
        </Switch>
      </Wrapper>
      <Footer />
  </Router>
);

export default App;

