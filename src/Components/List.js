import { useContext } from 'react'
import Item from './Item'
import classes from './List.module.css'
import TaskContext from '../Store/task-context'

const List = () => {
    const tasksCtx = useContext(TaskContext)

    const removeHandler = (id) => {
        tasksCtx.removeTask(id)
    }

    const changeCheckHandler = (id, checked) => {
        tasksCtx.changeTaskCheck(id, checked)
    }
    console.log(tasksCtx)
    return <ul className={classes.list}>
        {tasksCtx.tasks.map(task => (
            <Item key={task.id} id={task.id} name={task.name} checked={task.checked} onRemove={removeHandler} onChangeCheck={changeCheckHandler}/>
        ))}
    </ul>
}

export default List