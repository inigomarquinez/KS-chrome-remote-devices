import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SwipeableRoutes from "react-swipeable-routes";

import { RedView, BlueView, GreenView, YellowView } from './Views';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="root">
        <div className="header">
          <Link to="/red">Red</Link> | <Link to="/blue">Blue</Link> | <Link to="/green">Green</Link> | <Link to="/yellow">Yellow</Link>
        </div>
          <SwipeableRoutes>
            <Route path="/red" component={RedView} />
            <Route path="/blue" component={BlueView} />
            <Route path="/green" component={GreenView} />
            <Route path="/yellow" component={YellowView} />
          </SwipeableRoutes>
      </div>
    </Router>);
};

export default App;
