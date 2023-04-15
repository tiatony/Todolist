import Item from './Item'
import classes from './List.module.css'

const List = props => {

    const removeHandler = (id) => {
        props.onRemoveTask(id)
    }

    const changeCheckHandler = (id, checked) => {
        props.onChangeCheckedTask(id, checked)
    }

    return <ul className={classes.list}>
        {props.tasks.map(task => (
            <Item key={task.id} id={task.id} name={task.name} checked={task.checked} onRemove={removeHandler} onChangeCheck={changeCheckHandler}/>
        ))}
    </ul>
}

export default List