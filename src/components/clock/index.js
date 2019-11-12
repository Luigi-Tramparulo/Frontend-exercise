import React, { Component } from 'react'
import style from './clock.module.scss'


class Time extends Component {
  constructor(props) {
    super(props)

    this.toggleWatch = this.toggleWatch.bind(this);

    this.state = {
      timestamp: Date.now(),
      date: new Date(),
      timezone: 1,
      stopped: false
    }

  }

  tick = () => {
    this.setState((PrecState, props) => {
      return {
        timestamp: PrecState.timestamp + props.secs * 1000
      }
    }
    )
  }
  startWatch() {
    this.interval = setInterval(this.tick, this.props.secs * 1000);
  }
  toggleWatch(e) {
    this.setState((state) => {
      this.state.stopped ? this.startWatch() : clearInterval(this.interval);
      return { stopped: !state.stopped }
    })
  }

  componentDidMount() {
    this.startWatch();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    const d = new Date(this.state.timestamp);
    const tempo = d.getTime() + this.props.timezone * 3600 * 1000;
    const data = new Date(tempo);

    return (
      <div className={style.clock_container}>
        <h2>In {this.props.country} is {data.toLocaleTimeString()}</h2>
        <button onClick={this.toggleWatch}> {this.state.stopped ? 'Start' : 'Stop'}</button>
      </div>
    )

  }

}

export default Time
