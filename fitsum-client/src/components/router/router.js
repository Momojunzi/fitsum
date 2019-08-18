import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../landing/landing';

const AppRouter = () => {
  return (
    <Router >
      <Switch >
        <Route exact path='/' component={Landing} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
