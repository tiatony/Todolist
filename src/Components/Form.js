import { useContext, useRef } from 'react'
import classes from './Form.module.css'
import TaskContext from '../Store/task-context'

const Form = () => {
    const taskNameRef = useRef()
    const tasksCtx = useContext(TaskContext)

    const onAddTaskHandler = (event) => {
        event.preventDefault()
        const task = {
            name: taskNameRef.current.value
        }
        tasksCtx.addTask(task)
        taskNameRef.current.value = ''
        taskNameRef.current.focus()
    }

    return <form className={classes.form} onSubmit={onAddTaskHandler}>
            <input type="text" ref={taskNameRef} />
            <button type="submit">Add item</button>
        </form>
}

export default Form