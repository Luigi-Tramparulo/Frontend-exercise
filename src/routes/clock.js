import React, {Component} from 'react';
import Time from '../components/clock';

const clocks = [
  {
    secs: 1,
    country: "Italy",
    timezone: 0
  },
  {
    secs: 2,
    country: "Lisbona",
    timezone: 1
  },
  {
    secs: 3,
    country: "Cuba",
    timezone: -6
  }
];

class Clock extends Component {
  getClocks() {
    return clocks.map((clock) => {
     return <Time secs={clock.secs} country={clock.country} timezone={clock.timezone} />
   });
  }
  render() {
    return (
      <div>
        {this.getClocks()}
      </div>
    );
  }
}

export default Clock;
