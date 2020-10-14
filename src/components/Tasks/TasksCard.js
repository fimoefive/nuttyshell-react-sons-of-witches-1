
import React from "react"
import {Link} from "react-router-dom"
import "./Tasks.css"



export const TasksCard = ({ tasks }) => (
    <section className="tasks">
        <h3 className="tasksTitle"></h3>
            <Link to={`/tasks/detail/${tasks.id}`}>
                { tasks.title }
            </Link>
       
        <div className="tasksDate">{ tasks.completeBy }</div>
        {/* <div className="taskComplete">{ task.complete }</div> */}
    </section>
)