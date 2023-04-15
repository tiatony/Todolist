import { useRef, useState } from 'react'
import classes from './Form.module.css'

const Form = props => {
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

    return <form className={classes.form} onSubmit={onAddTaskHandler}>
            <input type="text" ref={taskNameRef} />
            <button type="submit">Add item</button>
        </form>
}

export default Form