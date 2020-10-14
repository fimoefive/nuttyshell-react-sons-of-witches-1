import React, { useContext, useEffect, useState } from "react"
import { TasksContext } from "./TasksProvider"
import { useParams, useHistory } from "react-router-dom"
import "./Tasks.css"

export const TasksDetail = () => {
	const { getTasksById , deleteTasks} = useContext(TasksContext)
	const [tasks, setTasks] = useState({})
	const { tasksId } = useParams();
	const history = useHistory();
	

	useEffect(() => {
        // console.log("useEffect", typeof tasksId) 
		// if (tasksId !== undefined)
		{
			getTasksById(tasksId)
			.then((response) => {
				setTasks(response)
			})}
	}, [getTasksById, setTasks, tasksId])


	return (
		<section className="tasks">
			<h3 className="tasksName">{tasks.title}</h3>
            <div className="tasksDate">{tasks.completeBy}</div>
			<button onClick={
			() => {
				deleteTasks(tasks.id)
					.then(() => {
						history.push("/tasks")
					})
				}}>Delete Task 
			</button>
			<button onClick={() => {
				history.push(`/tasks/edit/${tasks.id}`)
			}}>Edit
			</button>
            {/* <button onClick={
				() => {
					completeTasks(tasks.id)
						.then(() => {
							history.push("/tasks")
						})
				}}>Task Complete 
			</button> */}
		</section>
	)
}