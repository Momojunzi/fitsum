import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from '../landing/landing';
import Articles from '.././articles/articles';
import Bio from '../bio/bio';
import Gallery from '../gallery/gallery';
import History from '../history/history';
import Tourism from '../tourism/tourism';
import Videos from '../videos/videos';

import NavBar from '../navbar/navbar';

const AppRouter = () => {
  return (
    <Router >
      <NavBar />
      <Switch >
        <Route exact path='/' component={Landing} />
        <Route path='/articles' component={Articles} />
        <Route path='/bio' component={Bio} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/history' component={History} />
        <Route path='/tourism' component={Tourism} />
        <Route path='/videos' component={Videos} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
