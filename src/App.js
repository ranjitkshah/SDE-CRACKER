import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css"
import Login from './Comp/Login/Login'
import Dashboard from "./Comp/Dashboard/Dashboard";
import UserProvider from "./providers/UserProvider";
import Profile from "./Comp/Profile/Profile";
import Connect from "./Comp/Connect/Connect";
function App() {
  return (
    <div className="App">
    <UserProvider>
    <Router>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/connect" component={Connect}/>
    </Router>
    </UserProvider>
    </div>
  );
}

export default App;
