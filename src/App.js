import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Login from "./Comp/Login/Login";
import Dashboard from "./Comp/Dashboard/Dashboard";
import UserProvider from "./providers/UserProvider";
import Profile from "./Comp/Profile/Profile";
import Connect from "./Comp/Connect/Connect";
import About from "./Comp/About/About";
import Discussion from "./Comp/Discussion/Discussion";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/app";
function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Route exact path="/" component={Login} />
          {user ? (
            <div>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/connect" component={Connect} />
              <Route exact path="/about" component={About} />
              <Route exact path="/discussion" component={Discussion} />
            </div>
          ) : (
            <Redirect to="/" />
          )}
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
