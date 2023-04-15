import React from "react"

const TaskContext = React.createContext({
    tasks: [],
    addTask: (task) => {},
    removeTask: (id) => {},
    changeTaskCheck: (id, checked) => {}
})

export default TaskContext