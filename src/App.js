import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css"
import Login from "./Login";
import Dashboard from "./Dashboard";
import UserProvider from "./providers/UserProvider";
import Navbar from "./Comp/Navbar/Navbar";
import QuestionDone from "./Comp/QuestionDone/QuestionDone";
function App() {
  return (
    <UserProvider>
    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/questiondone">
            <QuestionDone />
          </Route>
        </Switch>
    </div>
    </Router>
    </UserProvider>
  );
}

export default App;
