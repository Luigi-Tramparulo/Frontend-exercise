import React from 'react';
import Clock from './routes/clock';
import Timer from './routes/timer';
import Films from './routes/films';
import Film from './routes/film';
import Carousel from './routes/carousel'
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


const App = () =>

  (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <NavLink to="/clock" activeClassName="selected" >Go to clock</NavLink>
              </li>
              <li>
                <NavLink to="/timer" activeClassName="selected" > Go to Timer </NavLink>
              </li>
              <li>
                <NavLink to="/films" activeClassName="selected" > Go to Film </NavLink>
              </li>
              <li>
                <NavLink to="/carousel" activeClassName="selected" > Carousel </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <Switch>
            <Route exact path="/clock" component={Clock} />
            <Route exact path="/timer" component={Timer} />
            <Route exact path="/films" component={Films} />
            <Route exact path="/films/:id" component={Film} />
            <Route exact path="/carousel" component={Carousel} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )


export default App;
