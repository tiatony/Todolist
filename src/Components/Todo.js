import { useState } from 'react'
import classes from './Todo.module.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const TASKS = [
    { id: 1, name: 'task1' },
    { id: 2, name: 'task2' },
    { id: 3, name: 'task3' }
]
const Todo = props => {
    const [tasks, setTasks] = useState(TASKS)
    const addTaskHandler = (task) => {
        setTasks((previousTasks) => {
            task.id = previousTasks.length + 1;
            return [...previousTasks, task]
        })
    }

    return <div className={classes.todo}>
        <TodoForm onAddTask={addTaskHandler}/>
        <TodoList tasks={tasks}/>
    </div>
}

export default Todo