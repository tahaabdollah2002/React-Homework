import React from "react";
import Timer from "./Timer";
import './style.css'
class App extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className="main">
                <Timer/>
            </div>
        )
    }
}
export default App