import { Component } from "react";

export default class Timer extends Component{
    constructor(props){
        super(props);
            this.state = {
                time: 10,
                timer: 0
            }
    }

    onTimePause(){console.log("Таймер на паузі!")};
    onTimeStart(){console.log("Таймер запущено!")};
    onTimeEnd(){console.log("Час вийшов!")};

    timeReadout (){
        let timer = setInterval (() => {            
            let time = this.state.time -1
            if(time === 0 || time < 0){
                time = 0;
                clearInterval(timer);
                this.onTimeEnd();
            } else{
                this.onTimeStart();
            }
            this.setState({time: time});
            }, 1000)
            return this.setState({timer: timer}) 
    }

    timeReset(){
        this.setState({time: 10});
        clearInterval(this.state.timer);
    }
    timeStop(){
        clearInterval(this.state.timer);
        this.onTimePause();
    }
    componentDidMount(){
        this.timeReadout();
    }

    render(){
        return(
            <div> 
                <h1>{this.state.time}</h1>
                <div className="btn-block"> 
                <button className="btn" onClick={() => this.timeStop()}>Pause</button>
                <button className="btn" onClick={() => this.timeReadout()}>Start</button>
                <button className="btn" onClick={() => this.timeReset()}>Reset</button>
                </div>
            </div>
        )
    }
}