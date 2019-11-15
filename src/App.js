import React from 'react';
import Clock from './routes/clock';
import Timer from './routes/timer';
import Film from './routes/film';

import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <header className="App-header">

        <nav>
          <ul>
            <li>
              <NavLink to="/clock" activeStyle={{ fontWeight: "bold", color: "black" }}>Go to clock</NavLink>
            </li>
            <li>
              <NavLink to="/timer" activeStyle={{ fontWeight: "bold", color: "black" }} > Go to Timer </NavLink>
            </li>
            <li>
              <NavLink to="/film" activeStyle={{ fontWeight: "bold", color: "black" }} > Go to Film </NavLink>
            </li>
          </ul>
          </nav>

        </header>
        <div>
          <Switch>
            <Route exact path="/clock" component={Clock} />
            <Route exact path="/timer" component={Timer} />
            <Route exact path="/film" component={Film} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
