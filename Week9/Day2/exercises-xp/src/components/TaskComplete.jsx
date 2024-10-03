import {complete_task} from '../redux/actions'
import {connect} from "react-redux"

const TaskComplete = (props) => {
    

    return (
        <>
        <input type="checkbox" onChange={()=>props.myComplete(props.id)}/>
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
       
        myComplete: (value) => dispatch(complete_task(value))  
    }}


export default connect(undefined, mapDispatchToProps)(TaskComplete);