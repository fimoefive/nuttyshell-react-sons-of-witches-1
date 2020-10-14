import React, { useContext, useEffect, useState } from "react"
import { TasksContext } from "./TasksProvider"
import { TasksCard } from "./TasksCard"
import { useHistory } from "react-router-dom"
import "./Tasks.css"

export const TasksList = () => {
    const { tasks, getTasks, searchTerms } = useContext(TasksContext)
    const [ filteredTasks, setFilteredTasks ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getTasks()
    }, [])



    useEffect(() => {
        if(searchTerms !== "") {
            const subset = tasks.filter(task => {
                const newVar = task.title.toLowerCase()
                // console.log(searchTerms)
                // console.log(newVar)
                newVar.includes(searchTerms)})
            // console.log(subset)
                setFilteredTasks(subset)
        } else {
            setFilteredTasks(tasks)
        }
    }, [searchTerms, tasks, setFilteredTasks])

    return (
        <>
            <h2>Tasks</h2>
            <button onClick={() => {history.push("/tasks/create")}}>
                Create Task
            </button>
            <div className="tasks">
                {
                    filteredTasks.map(tasks => {
                        {/* console.log(tasks) */}
                        return <TasksCard key={tasks.id} tasks={tasks} />
                        })
                }
            </div>
        </>
    )
}