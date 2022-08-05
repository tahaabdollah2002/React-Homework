import React, {useState, useEffect} from "react";
import Timer from "./Timer";
import './style.css'
import Timelist from "./Timelist";
import { TestContext } from "./testContext";

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
        <TestContext.Provider value={{
            timeArr,
            setTimeArr
        }}>
        <div className="main" style={{background: isLight ? 'white' : 'black'}}>
            <h1>{title}</h1>
            <Timer isLight={isLight} turn={turn}/>
            <Timelist/>
        </div>
        </TestContext.Provider>
    )
}
export default App