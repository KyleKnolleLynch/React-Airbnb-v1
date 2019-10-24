import React, { Fragment } from 'react';
import { SpacesProvider } from './context/spacesContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/mainLayout/ScrollToTop';
import Navbar from './components/mainLayout/Navbar';
import Home from './components/pages/Home';
import Spaces from './components/pages/Spaces';
import SingleSpace from './components/pages/SingleSpace';
import NotFound from './components/pages/NotFound';

import './CSS/main.css';

const App = () => {
  return (
    <SpacesProvider>
      <Router>
        <ScrollToTop>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/spaces/' component={Spaces} />
              <Route exact path='/spaces/:slug' component={SingleSpace} />
              <Route component={NotFound} />
            </Switch>
          </Fragment>
        </ScrollToTop>
      </Router>
    </SpacesProvider>
  );
};

export default App;
