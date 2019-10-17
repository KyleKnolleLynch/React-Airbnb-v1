import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Rooms from './components/pages/Rooms';
import SingleRoom from './components/pages/SingleRoom';
import NotFound from './components/pages/NotFound';

import './CSS/main.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms/' component={Rooms} />
          <Route exact path='/rooms/:single' component={SingleRoom} />
          <Route component={NotFound} />
        </Switch>
        
      </Fragment>
    </Router>
  );
};

export default App;
