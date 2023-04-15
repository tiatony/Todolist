import { useReducer } from "react";
import TaskContext from "./task-context";
import { v4 } from "uuid";

const defaultState = {
    tasks: []
}

const taskReducer = (state, action) => {
    if(action.type === 'ADD') {
        const task = {
            id: v4(),
            name: action.task.name,
            checked: false
        }
        const updatedTasks = state.tasks.concat(task)
        return {
            tasks: updatedTasks
        }
    }

    if(action.type === 'REMOVE') {
        const updatedTasks = state.tasks.filter(task => task.id !== action.id)
        return {
            tasks: updatedTasks
        }
    }

    if(action.type === 'CHANGE_CHECK') {
        let updatedTasks = [...state.tasks]
        const taskIndex = state.tasks.findIndex(task => task.id === action.id)
        const updatedTask = {...state.tasks[taskIndex], checked: action.checked}
        updatedTasks[taskIndex]=updatedTask
        return {
            tasks: updatedTasks
        }
    }
}

const TaskProvider = props => {
    const [taskState, dispatchTaskAction] = useReducer(taskReducer, defaultState)

    const addTaskHandler = (task) => {
        dispatchTaskAction({type: 'ADD', task: task})
    }

    const removeTaskHandler = (id) => {
        dispatchTaskAction({type: 'REMOVE', id: id})
    }

    const changeTaskCheckHandler = (id, checked) => {
        dispatchTaskAction({type: 'CHANGE_CHECK', id: id, checked: checked})
    }

    const taskContext = {
        tasks: taskState.tasks,
        addTask: addTaskHandler,
        removeTask: removeTaskHandler,
        changeTaskCheck: changeTaskCheckHandler
    }

    return <TaskContext.Provider value={taskContext}>
        {props.children}
    </TaskContext.Provider>
}

export default TaskProvider