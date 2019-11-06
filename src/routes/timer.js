import React from 'react'

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            hour:0,       
            minutes:0,
            secs:0
        }
    }
    tickSecs= () =>{        
        this.setState((precState)=>{
            return{
            secs: precState.secs + 1,             
        }
        })
    }
    tickMin= () =>{        
        this.setState((precState)=>{
            return{
            minutes: precState.minutes + 1,             
        }
        })
    }
    tickHour= () =>{
        this.setState((precState)=>{
            return{
            minutes: precState.hour + 1,             
        }
        })
    }
        
    startWatch(){
        setInterval(this.tickSecs,1000);
    //     setInterval(this.tickMin,(60*1000));
    //     setInterval(this.tickHour,(60000*6));        
    }
    stopWatch(){
        clearInterval(this.startWatch)
    }
    componentDidMount() {
        this.startWatch();
    }

    componentDidUpdate(){
        const {secs, minutes}=this.state
        if(secs>59){

            this.setState({secs:0})
            this.tickMin()            
        }
        if(minutes>59){
            this.setState({minutes:0})
            this.tickHour()
        }
         
    }


    render(){
        const hour=this.state.hour;
        const minutes = this.state.minutes;
        const secs= this.state.secs;

        
        
        const time = hour + " " + minutes + " "+ secs;
        return <h2>Fai partire il cronometro da 
        {time}
        <button onClick={this.startCount}>Start</button>
        <button onClick={this.stopWatc}>Stop</button>
        <button>Resume</button>
        <button>Clear</button>
        </h2>
    }

}

export default Timer;