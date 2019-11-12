import React, { Component } from 'react';
import './clock.module.scss';
import style from './clock.module.scss';



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
    let sec=45;

    return (
      <React.Fragment>
      <div className={style.clock_container}>
        <h2>In {this.props.country} is {data.toLocaleTimeString()}</h2>
        <button onClick={this.toggleWatch}> {this.state.stopped ? 'Start' : 'Stop'}</button>
      </div>
      <div className={style.clock}>
      <div className={`${style.hand} ${style.hour}`}></div>
      <div className={`${style.hand} ${style.minutes}`}></div>
      <div style={{transform: `rotate(${sec}deg)`}} className={`${style.hand} ${style.sec}`}></div>
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
      </React.Fragment>
    )

  }

}

export default Time
