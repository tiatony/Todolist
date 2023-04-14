import Item from './Item'
import classes from './TodoList.module.css'

const TodoList = props => {
    return <ul className={classes.todoList}>
        {props.tasks.map(task => (
            <Item key={task.id} name={task.name} />
        ))}
    </ul>
}

export default TodoList