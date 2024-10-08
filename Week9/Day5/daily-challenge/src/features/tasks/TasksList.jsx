import {useTasksSelector} from './state/hooks.js'
import TaskItem from './TaskItem';


const TasksList = (props) => {
    const tasks = useTasksSelector();


    return (
        <>
        {tasks.map((item) => {
            return (
                <>
                <TaskItem key={item.id} task={item}/>
                </>
            )
        })}
        </>
    )

}

export default TasksList;