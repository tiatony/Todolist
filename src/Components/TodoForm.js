import { useRef, useState } from 'react'
import classes from './TodoForm.module.css'

const TodoForm = props => {
    const taskNameRef = useRef()

    const onAddTaskHandler = (event) => {
        event.preventDefault()
        const task = {
            name: taskNameRef.current.value
        }
        props.onAddTask(task)
        taskNameRef.current.value = ''
        taskNameRef.current.focus()
    }

    return <form className={classes.todoForm} onSubmit={onAddTaskHandler}>
            <input type="text" ref={taskNameRef} />
            <button type="submit">Add item</button>
        </form>
}

export default TodoForm