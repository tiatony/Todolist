import { useContext } from 'react'
import classes from './Dashboard.module.css'
import TaskContext from '../Store/task-context'

const Dashboard = props => {
    const tasksCtx = useContext(TaskContext)

    const checkedTasksNumber = tasksCtx.tasks.filter(task => task.checked).length
    return <div className={classes.dashboard}>
        {checkedTasksNumber} / {tasksCtx.tasks.length}
    </div>
}

export default Dashboard