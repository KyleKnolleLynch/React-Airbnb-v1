import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/mainLayout/Navbar';
import Home from './components/pages/Home';
import Spaces from './components/pages/Spaces';
import SingleSpace from './components/pages/SingleSpace';
import NotFound from './components/pages/NotFound';

import './CSS/main.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/spaces/' component={Spaces} />
          <Route exact path='/spaces/:single' component={SingleSpace} />
          <Route component={NotFound} />
        </Switch>
        
      </Fragment>
    </Router>
  );
};

export default App;
