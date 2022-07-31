import React from "react"
import './style.css'

var interval;
class Timer extends React.Component{
    constructor(){
        super()
        this.state = {
            time: 10
        }
    }
    componentDidUpdate(){
        if(this.state.time == 0){
            clearInterval(interval)
        }
    }
    stop = () => {
        clearInterval(interval)
    }
    start = () => {
        interval = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            })
        }, 1000);
    }
    render(){
        return(
            <React.Fragment>
                <div className="timer">
                    <h1>
                        it is {this.state.time}
                    </h1>
                </div>
                <div>
                    <button className="btn" onClick={this.start}>Start</button>
                    <button className="btn" onClick={this.stop}>Stop</button>
                </div>
            </React.Fragment>
        )
    }
}
export default Timer