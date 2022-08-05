import Item from "./Item"
import { TestContext } from "./testContext";
import { useContext } from "react";


const Timelist = (props) =>{
    const context = useContext(TestContext);
    return(
        <div className="main-time-list">
            {context.timeArr.map((c)=>(
                <Item key={Math.random()}>
                    {c}
                </Item> //when we put a Component in a loop we should set a unique key for distinguish
            ))}
        </div>
    )
}
export default Timelist