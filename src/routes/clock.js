import React, {Component} from 'react';
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

class Clock extends Component {
  getClocks = () => clocks.map((clock, i) => <Time key={i} secs={clock.secs} country={clock.country} timezone={clock.timezone} />);

  render() {
    return (
      <div className="clock-container">
        {this.getClocks()}
      </div>
    );
  }
}

export default Clock;
