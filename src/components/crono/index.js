import React, { Component } from 'react'
import logo from '../../img/cronometro.png'

class Crono extends Component {
  constructor(props) {
    super(props)

    this.state = {
      millisecs: 0,
      minutes: 0,
      secs: 0,
      stopped: true,
      buttonstate: "start"
    }
  }

  tickSecs = () => {
    this.setState((precState) => {
      return {
        secs: precState.secs + 1,
      }
    })
  }

  tickMin = () => {
    this.setState((precState) => {
      return {
        minutes: precState.minutes + 1,
      }
    })
  }

  tickMillisecs = () => {
    this.setState((precState) => {
      if (!this.state.stopped) {
        return {
          millisecs: precState.millisecs + 1,
        }
      }
    })
  }

  toggleWatch = () => {
    const state = !this.state.stopped
    const label = state ? 'start' : 'stop'
    this.setState(
      { stopped: state, buttonstate: label }
    )
  }

  startWatch() {
    setInterval(this.tickMillisecs, 10);
  }

  clearWatch = () => {
    this.setState(
      {
        millisecs: 0,
        secs: 0,
        minutes: 0,
      }
    )
  }

  componentDidMount() {
    this.startWatch();
  }

  componentDidUpdate() {
    const { millisecs, secs } = this.state
    if (secs > 59) {
      this.setState({ secs: 0 })
      this.tickMin()
    }
    if (millisecs > 99) {
      this.setState({ millisecs: 0 })
      this.tickSecs()
    }
  }

  render() {
    let { secs, millisecs, minutes } = this.state;
    const zero = "0";
    if (millisecs < 10) {
      millisecs = zero + millisecs;
    }
    if (secs < 10) {
      secs = zero + secs;
    }
    if (minutes < 10) {
      minutes = zero + minutes;
    }
    const time = `${minutes} : ${secs}.${millisecs}`;
    return (
    <div id="crono-container">
      <div id="crono">
        <img className="header-clock" src={logo} alt="chronometer"/>
        <span className="header-timer">{time}</span>
      </div>
      <div id="crono-buttons-container">
        <button className="button-crono" onClick={this.toggleWatch}>{this.state.buttonstate}</button>
        <button className="button-crono" onClick={this.clearWatch}>Clear</button>
      </div>
    </div>
    )
  }
}

export default Crono;
