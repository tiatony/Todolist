import classes from './Todo.module.css'
import Form from './Form'
import List from './List'
import Dashboard from './Dashboard'
import TaskProvider from '../Store/TaskProvider'

const Todo = () => {
    return <TaskProvider>
        <div className={classes.todo}>
            <Dashboard />
            <Form />
            <List />
        </div>
    </TaskProvider>
}

export default Todo