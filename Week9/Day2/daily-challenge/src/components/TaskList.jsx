import {connect} from "react-redux"
import TaskRemove from "./TaskRemove";


const TasksList = (props) => {
  const date = props.date[0]+ '-' + props.date[1] + '-' + props.date[2];
  let found = -1;
  for (let i =0; i< props.myTasks.length; i++) {                
    if (props.myTasks[i][0] === date){found = i; break}
  }
  if (found === -1){
    return <h3>No tasks found for this date.</h3>
  }
  
  else {

    const currentTasks = props.myTasks[found].slice(1)[0]
    
  return (
    <>
        <>
          {currentTasks.map((item) => (
            <div key={item.id}>
              {item.name}
              <TaskRemove id={item.id} date={date} />
            </div>
          ))}
        </>

    </>
  );}

};
const mapStateToProps = (state) => {
  return {
      myTasks:state.tasksReducer.tasks,
  }
}


export default connect(mapStateToProps)(TasksList)