import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../landing/landing';
import NavBar from '../navbar/navbar';

const AppRouter = () => {
  return (
    <Router >
      <NavBar />
      <Switch >
        <Route exact path='/' component={Landing} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
