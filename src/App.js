import React from 'react';
import Clock from './routes/clock';
import Timer from './routes/timer';

import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <header className="App-header">

          <ul>
            <li>
              <Link to="/clock" > Go to clock </Link>
            </li>
            <li>
              <Link to="/timer" > Go to Timer </Link>
            </li>
          </ul>

        </header>
        <section>
          <Switch>
            <Route exact path="/clock" component={Clock} />
            <Route exact path="/timer" component={Timer} />
          </Switch>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
