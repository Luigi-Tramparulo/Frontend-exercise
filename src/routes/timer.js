import React from 'react'

class Timer extends React.Component {
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
      { stopped: !this.state.stopped, buttonstate: label }
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
    return (<React.Fragment>
      <h2>{time}</h2>
      <div>
        <button className="button-crono" onClick={this.toggleWatch}>{this.state.buttonstate}</button>
        <button className="button-crono" onClick={this.clearWatch}>Clear</button>
      </div>
    </React.Fragment>
    )
  }
}

export default Timer;
