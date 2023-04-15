import Item from './Item'
import classes from './List.module.css'

const List = props => {
    return <ul className={classes.list}>
        {props.tasks.map(task => (
            <Item key={task.id} name={task.name} />
        ))}
    </ul>
}

export default List