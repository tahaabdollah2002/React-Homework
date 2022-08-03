import Item from "./Item"

const Timelist = (props) =>{
    return(
        <div className="main-time-list">
            {props.children.map((c)=>(
                <Item key={Math.random()}>
                    {c}
                </Item> //when we put a Component in a loop we should set a unique key for distinguish
            ))}
        </div>
    )
}
export default Timelist