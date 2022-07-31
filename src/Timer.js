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
    componentDidMount(){
        interval = setInterval(() => {
            this.setState({
                time: this.state.time - 1
            })
        }, 1000);
    }
    componentDidUpdate(){
        if(this.state.time == 0){
            clearInterval(interval)
        }
    }
    render(){
        return(
            <div className="timer">
                <h1>
                    it is {this.state.time}
                </h1>
            </div>
        )
    }
}
export default Timer