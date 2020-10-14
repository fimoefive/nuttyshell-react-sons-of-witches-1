import React, { useContext, useEffect, useState } from "react"
import { TasksContext } from "../Tasks/TasksProvider"
import { useHistory, useParams } from "react-router-dom"
import "./Tasks.css"

export const TasksForm = () => {
    const { addTasks, getTasksById, editTasks, getTasks, } = useContext(TasksContext)
    const [tasks, setTasks] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {TasksId} = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newTasks = {...tasks}
        newTasks[event.target.title] = event.target.value
        // console.log("newTasks: ", newTasks);
        setTasks(newTasks)
    }

    useEffect(() => {
        getTasks().then(() => {
            if(TasksId) {
                getTasksById(TasksId)
                .then(tasks => {
                    setTasks(tasks)
                    setIsLoading(false)
                })
            }else {
                setIsLoading(false)
            }
        })
    }, [getTasks, getTasksById, setTasks, setIsLoading, TasksId, tasks])

    const constructTasksObject = () => {
        if(parseInt(tasks.title) === 0) {
            window.alert("Select a title")
        } else {
            setIsLoading(true)
            if(TasksId){
                editTasks({
                    id: tasks.id,
                    title: tasks.title,
                    completeBy: tasks.completeBy,
                    complete: tasks.complete,
                    userId: parseInt(tasks.userId)
                })
                .then(() => history.push("/tasks"))
                .then(() => console.log("Updating Task: ", TasksId))
            }else {
                addTasks({
                    title: tasks.title,
                    completeBy: tasks.completeBy,
                    complete: tasks.complete = false,
                    userId: parseInt(localStorage.getItem("nutshell_customer"))
                })
                .then(() => history.push("/tasks"))
                .then(() => console.log("Adding new Task"))
            }
        }
    }




    return (
        <form className="tasksForm">
            <h2 className="tasksForm_title">{TasksId ? "Edit Task:" : "Create Task:"}</h2>

            <fieldset>
                <div className="from-group">
                    <label htmlFor="tasksTitle">Task Name:</label>
                    <input type="text" id="tasksTitle" title="title" required autoFocus className="from-control"
                    placeholder="Enter Task Name"
                    onChange={handleControlledInputChange}
                    defaultValue={tasks.title}/>
                </div>
            </fieldset>

            <fieldset>
                <div className="from-group">
                    <label htmlFor="tasksDate">Complete By:</label>
                    <input type="text" id="tasksDate" title="completeBy" required autoFocus className="from-control"
                    placeholder="Enter Time/Date"
                    onChange={handleControlledInputChange}
                    defaultValue={tasks.completeBy}/>
                </div>
            </fieldset>

            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() 
                    constructTasksObject()
                }}>
            {/* {TasksId ? "Save Task" : "Create Task"} */}
            Create Task:</button>
        </form>
    )
}