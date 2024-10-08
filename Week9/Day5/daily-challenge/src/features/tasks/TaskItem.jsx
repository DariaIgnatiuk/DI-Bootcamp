import TaskRemove from './TaskRemove.jsx';
import TaskEdit from './TaskEdit.jsx';
import { useCompleteTask } from './state/hooks.js';
import './tasks.css'

const TaskItem = (props) => {
    const {task} = props
    
    const callCompleteTask = useCompleteTask()

    return (
        <>
                <div className={task.active? '':'active'}>
                    <span onClick={()=>callCompleteTask(task.id)}>
                    {task.task} ({task.category}) 
                    </span>
                    <TaskEdit id={task.id}/>
                    <TaskRemove id={task.id}/>
                </div>
        </>
    )
}

export default TaskItem;