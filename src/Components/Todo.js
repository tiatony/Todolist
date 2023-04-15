import { useState } from 'react'
import classes from './Todo.module.css'
import Form from './Form'
import List from './List'

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

    const removeTaskHandler = (id) => {
        setTasks((previousTasks) => {
            return previousTasks.filter(task => task.id !== id)
        })
    }

    return <div className={classes.todo}>
        <Form onAddTask={addTaskHandler}/>
        <List tasks={tasks} onRemoveTask={removeTaskHandler}/>
    </div>
}

export default Todo