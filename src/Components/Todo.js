import { useState } from 'react'
import classes from './Todo.module.css'
import Form from './Form'
import List from './List'

const TASKS = [
    { id: 1, name: 'task1', checked: false },
    { id: 2, name: 'task2', checked: false },
    { id: 3, name: 'task3', checked: false }
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

    const changeCheckedTaskHandler = (id, checked) => {
        setTasks((previousTasks) => {
            let updatedTasks = [...previousTasks]
            const taskIndex = previousTasks.findIndex(task => task.id === id)
            const updatedTask = {...previousTasks[taskIndex], checked: checked}
            updatedTasks[taskIndex]=updatedTask

            return updatedTasks
        })
    }

    return <div className={classes.todo}>
        <Form onAddTask={addTaskHandler}/>
        <List tasks={tasks} onRemoveTask={removeTaskHandler} onChangeCheckedTask={changeCheckedTaskHandler}/>
    </div>
}

export default Todo