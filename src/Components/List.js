import Item from './Item'
import classes from './List.module.css'

const List = props => {

    const removeHandler = (id) => {
        props.onRemoveTask(id)
    }

    return <ul className={classes.list}>
        {props.tasks.map(task => (
            <Item key={task.id} id={task.id} name={task.name} onRemove={removeHandler}/>
        ))}
    </ul>
}

export default List