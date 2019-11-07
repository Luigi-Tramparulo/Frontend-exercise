import React from 'react'

class Timer extends React.Component {
	constructor(props) {
		super(props)
		
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
	toggleWatch = () => this.setState({ stopped: !this.state.stopped})

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
		const { hour,secs, minutes, stopped } = this.state
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
		let{secs,hour,minutes}=this.state;
		const zero= "0";		
		if(hour<10){
			hour=zero+hour;
		}
		if(secs<10){
			secs=zero+secs;
		}
		if(minutes<10){
			minutes=zero+minutes;
		}
		const time = `${hour} : ${minutes} : ${secs}`;
		return (<React.Fragment>
			<h2>{time}</h2>
			<div>
				<button className="button-crono" onClick={this.toggleWatch}>Start</button>
				<button className="button-crono" onClick={this.clearWatch}>Clear</button>
			</div>
		</React.Fragment>
		)
	}
}

export default Timer;