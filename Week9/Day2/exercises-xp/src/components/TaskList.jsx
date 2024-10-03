import {connect} from "react-redux"
import TaskRemove from "./TaskRemove";
import TaskComplete from "./TaskComplete";

const TasksList = (props) => {

  return (
    <>
        <>
          {props.myTasks.map((item) => (
            <div key={item.id}>
              <TaskComplete id={item.id} />
              {item.name}
              <TaskRemove id={item.id} />
            </div>
          ))}
        </>

    </>
  );

};
const mapStateToProps = (state) => {
  return {
      myTasks:state.tasksReducer.tasks,
  }
}


export default connect(mapStateToProps)(TasksList)