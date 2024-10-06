
import TaskRemove from './TaskRemove';
import TaskComplete from './TaskComplete';
import {useSelector} from 'react-redux'

const TasksList = (props) => {
    const tasks = useSelector(state => state.todosReducer.todos);
    

  return (
        <>
          {tasks.map((item) => (
            <div key={item.id}>
              <TaskComplete id={item.id} />
              {item.task}
              <TaskRemove id={item.id} />
            </div>
          ))}
        </>
  );

};
export default TasksList