import React, { useContext, useEffect, useState } from "react"
import { TasksContext } from "./TasksProvider"
import { TasksCard } from "./TasksCard"
import { useHistory } from "react-router-dom"
import "./Tasks.css"

export const TasksList = () => {
    const { Tasks, getTasks, searchTerms } = useContext(TasksContext)
    const [ filteredTasks, setFilteredTasks ] = useState([])

    useEffect(() => {
        getTasks()
    }, [])

    const history = useHistory()

    return (
        <>
            <h2>Tasks</h2>
            <button onClick={() => {history.push("/tasks/create")}}>
                Create Task
            </button>
            <div className="tasks">
                {
                    filteredTasks.map(tasks => {return <TasksCard key={tasks.id} tasks={tasks} />})
                }
            </div>
        </>
    )
}