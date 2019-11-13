import React, { Component } from 'react';
import style from './clock.module.scss';
import './clock.scss';



class Time extends Component {
  constructor(props) {
    super(props)

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
    let sec=data.getSeconds();
    let min=data.getMinutes();
    let getHour=data.getHours();
    let hour = hours => hours <= 12 ? hours : hours-12;


    return (
      <React.Fragment>
        <h2 className={style.clock_header}>In {this.props.country} is {data.toLocaleTimeString()}</h2>
      <div className={style.clock_container}>
      <div className={style.clock}>
      <div className={`${style.hand} ${style.hour} hour${hour(getHour)}`}></div>
      <div className={`${style.minutes} minutes${min} ${style.hand}`}></div>
      <div className={`${style.sec} sec${sec} ${style.hand}`}></div>
      <div className={`${style.number} ${style.number1}`}>1</div>
      <div className={`${style.number} ${style.number2}`}>2</div>
      <div className={`${style.number} ${style.number3}`}>3</div>
      <div className={`${style.number} ${style.number4}`}>4</div>
      <div className={`${style.number} ${style.number5}`}>5</div>
      <div className={`${style.number} ${style.number6}`}>6</div>
      <div className={`${style.number} ${style.number7}`}>7</div>
      <div className={`${style.number} ${style.number8}`}>8</div>
      <div className={`${style.number} ${style.number9}`}>9</div>
      <div className={`${style.number} ${style.number10}`}>10</div>
      <div className={`${style.number} ${style.number11}`}>11</div>
      <div className={`${style.number} ${style.number12}`}>12</div>
      </div>
      </div>
      </React.Fragment>
    )

  }

}

export default Time
