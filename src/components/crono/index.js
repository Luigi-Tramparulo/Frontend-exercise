import React, { Component } from 'react'
import logo from '../../img/cronometro.png'
import style from './crono.module.scss'

class Crono extends Component {
  constructor(props) {
    super(props)

    this.state = {
      millisecs: 0,
      minutes: 0,
      secs: 0,
      stopped: true,
      buttonstate: "start",
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
    this.IntervalId = setInterval(this.tickMillisecs, 10);
    this.setState({ IntervalId: this.IntervalId })
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

  componentWillUnmount() {
    clearInterval(this.IntervalId)
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
    <div className={style.cronoContainer}>
      <div className={style.crono}>
        <img className={style.headerClock} src={logo} alt="chronometer"/>
        <span className={style.headerTime}>{time}</span>
      </div>
      <div className={style.cronoButtonsContainer} >
        <button className={style.buttonCrono} onClick={this.toggleWatch}>{this.state.buttonstate}</button>
        <button className={style.buttonCrono} onClick={this.clearWatch}>Clear</button>
      </div>
    </div>
    )
  }
}

export default Crono;
