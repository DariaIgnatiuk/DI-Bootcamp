import {delete_task} from '../redux/actions'
import {connect} from "react-redux"

const TaskRemove = (props) => {
    

    return (
        <>
        <button onClick={()=>props.myRemove([props.id, props.date])} > X </button>
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
       
        myRemove: (value) => dispatch(delete_task(value))  
    }}


export default connect(undefined, mapDispatchToProps)(TaskRemove);