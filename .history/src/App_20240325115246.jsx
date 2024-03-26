import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Componnts/SignIn';
import SignUp from './Componnts/SignUp';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}
