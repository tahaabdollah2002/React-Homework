import './style.css'
import { useContext } from 'react'
import { TestContext } from './testContext'
const Item = (props) =>{
    const context = useContext(TestContext)
    const handleDeleteItem = (element)=>{
        context.setTimeArr(context.timeArr.filter(index=>index !== element.target.innerHTML))
    }
    return(
        <div className="time-item" onClick={handleDeleteItem}>
            {props.children}
        </div>
    )
}
export default Item