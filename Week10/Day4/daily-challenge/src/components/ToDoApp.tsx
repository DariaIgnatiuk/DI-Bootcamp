import { ReactElement, useState } from "react";
import List from "./List";

interface Todo {
    id: number;
    text: string;
  }

const ToDoApp = ():ReactElement => {
    const [todos, setTodos] = useState<Todo[]>([{id:1, text:'finish project'}])
    const [id, setId] = useState<number>(2)

    const renderItem = (item:Todo) => {
        return <li key={item.id}>{item.text}</li>
    }

    const addTodo = () => {
        const newToDo = {
            id: id,
            text:new Date().toLocaleTimeString()
        }
        setId((prev) => prev + 1)
        setTodos([...todos, newToDo])
    }

    return (
        <>
        <h1>To-Do App </h1>
        <button onClick={addTodo}>AddTodo</button>
        <List items={todos} renderItem={renderItem}/>
        </>
    )
}

export default ToDoApp