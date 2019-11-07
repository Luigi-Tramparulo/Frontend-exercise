import React from 'react'

class Timer extends React.Component {
	constructor(props) {
		super(props)
		this.tick = this.tickSecs.bind(this)
		this.state = {
			hour: 0,
			minutes: 0,
			secs: 0,
			stopped: false
		}
	}
	tickSecs = () => {
		this.setState((precState) => {
			if (!this.state.stopped) {
				return {
					secs: precState.secs + 1,
				}
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
	tickHour = () => {
		this.setState((precState) => {
			return {
				minutes: precState.hour + 1,
			}
		})
	}
	toggleWatch = () => {
		this.setState(() => {
			if (this.state.stopped) {
				return {
					stopped: false,
				}
			} else {
				return {
					stopped: true
				}
			}
		}
		)

	}

	startWatch() {
		setInterval(this.tickSecs, 1000);

	}

	clearWatch = () => {
		this.setState( 
			{
				hour: 0,
				secs: 0,
				minutes: 0
			}
		)
	}

	componentDidMount() {		
		this.startWatch();
	}




	componentDidUpdate() {		
		const { secs, minutes, stopped } = this.state
		if (secs > 59) {

			this.setState({ secs: 0 })
			this.tickMin()
		}
		if (minutes > 59) {
			this.setState({ minutes: 0 })
			this.tickHour()
		}


	}



	render() {
		const hour = this.state.hour;
		const minutes = this.state.minutes;
		const secs = this.state.secs;
		const time = hour + " " + minutes + " " + secs;
		return <h2>
      {time}
			<button className="button-crono" onClick={this.toggleWatch}>Start</button>
			<button className="button-crono" onClick={this.clearWatch}>Clear</button>
		</h2>
	}

}

export default Timer;