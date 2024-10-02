import { useContext } from "react";
import { TasksContext } from "../App";
import TaskRemove from "./TaskRemove";
import TaskEdit from "./TaskEdit";
import TaskComplete from "./TaskComplete";

const TasksList = (props) => {
  const { state } = useContext(TasksContext);

  return (
    <>
      {state.show === 'all' && (
        <>
          {state.tasks.map((item) => (
            <div key={item.id}>
              <TaskComplete id={item.id} />
              {item.name}
              <TaskRemove id={item.id} />
              <TaskEdit id={item.id} />
            </div>
          ))}
        </>
      )}
  
  {state.show === 'completed' && (
        <>
          {state.completedTasks.map((item) => (
            <div key={item.id}>
              <TaskComplete id={item.id} />
              {item.name}
              <TaskRemove id={item.id} />
              <TaskEdit id={item.id} />
            </div>
          ))}
        </>
      )}
      {state.show === 'active' && (
        <>
          {state.activeTasks.map((item) => (
            <div key={item.id}>
              <TaskComplete id={item.id} />
              {item.name}
              <TaskRemove id={item.id} />
              <TaskEdit id={item.id} />
            </div>
          ))}
        </>
      )}
    </>
  );

};
export default TasksList