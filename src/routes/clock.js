import React from 'react';
import Time from '../components/clock';

const clocks = [
  {
    secs: 1,
    country: "Italy",
    timezone: 0
  },
  {
    secs: 1,
    country: "Lisbona",
    timezone: -1
  },
  {
    secs: 1,
    country: "Cuba",
    timezone: -6
  }
];

const getClocks = () => clocks.map((clock, i) => <Time key={i} {...clock} />);

const Clock = () => (
  <div id="clock-route-container">
    {getClocks()}
  </div>
);

export default Clock;
