import React from "react"
import Timelist from "./Timelist";
import './style.css'

var interval;
class Timer extends React.Component{
    constructor(){
        super()
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            isStart: false
        }
    }
    start = () => {
        if(this.state.isStart === false){
            this.setState({
                isStart: true
            })
        }
        interval = setInterval(() => {
            this.setState({
                second: this.state.second + 1
            })
            if(this.state.second === 60){
                this.setState({
                    second: 0,
                    minute: this.state.minute + 1
                })
            }
            if(this.state.minute === 60){
                this.setState({
                    minute: 0,
                    hour: this.state.hour + 1
                })
            }
        }, 1000);
    }
    stop = () => {
        this.setState({
            isStart: false
        })
        clearInterval(interval)
    }
    reset = () => {
        this.stop();
        this.setState({
            hour: 0,
            minute: 0,
            second: 0
        })
    }
    handleTimeSave = () =>{
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
        let newTime = `${h > 9 ? h : '0' + h} : ${m > 9 ? m : '0' + m} : ${s > 9 ? s : '0' + s}`;
        this.props.setTimeArr([...this.props.timeArr, newTime])
    }
    render(){
        let h = this.state.hour;
        let m = this.state.minute;
        let s = this.state.second;
        return(
            <React.Fragment>
                <div className="timer" onClick={this.handleTimeSave}>
                    <h1>
                        {`${h > 9 ? h : '0' + h} : ${m > 9 ? m : '0' + m} : ${s > 9 ? s : '0' + s}`}
                    </h1>
                </div>
                <div>
                    <button className="btn btn-start" onClick={this.start}>Start</button>
                    <button className="btn btn-reset" onClick={this.reset}>Reset</button>
                    <button className="btn btn-stop" onClick={this.stop}>Stop</button>
                    <button className="btn btn-change" style={{background: this.props.isLight ? 'black' : 'white' , color: this.props.isLight ? 'white' : 'black'}} onClick={this.props.turn}>{this.props.isLight ? "turn dark" : 'turn light'}</button>
                </div>
                <Timelist>
                    {this.props.timeArr}
                </Timelist>
            </React.Fragment>
        )
    }
}
export default Timer