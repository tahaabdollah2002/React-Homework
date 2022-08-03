import React, {useState, useEffect} from "react";
import Timer from "./Timer";
import './style.css'
import Timelist from "./Timelist";

const App = () =>{
    const [title, setTitle] = useState('hello world');
    const [isLight, setIsLight] = useState(false);
    const [timeArr, setTimeArr] = useState([])

    const turn = () =>{
        setIsLight(!isLight);
    }
    useEffect(() => {
        console.log('useEffect')
        return () => {
            
        };
    }, [isLight]);
    return (
        <div className="main" style={{background: isLight ? 'white' : 'black'}}>
            <h1>{title}</h1>
            <Timer timeArr={timeArr} setTimeArr={setTimeArr} isLight={isLight} turn={turn}/>
        </div>
    )
}
export default App