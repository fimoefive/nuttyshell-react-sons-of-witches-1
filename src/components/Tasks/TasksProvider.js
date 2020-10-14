import React, { useState, createContext } from "react"

export const TasksContext = createContext();

export const TasksProvider = (props) => {
    const [tasks, setTasks] = useState([]);
    const [searchTerms, setSearchTerms] = useState("");

    const getTasks = () => {
        return fetch(`http://localhost:8088/tasks`)
            .then(response => response.json())
            .then(setTasks)
    }

    const addTasks = (x) => {
        return fetch(`http://localhost:8088/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
            .then(getTasks)
    }

    const getTasksById = (id) => {
        return fetch(`http://localhost:8088/tasks/detail/${id}`)
            .then(response => response.json())
    }

    const deleteTasks = tasksId => {
        return fetch(`http://localhost:8088/tasks/detail/${tasksId}`, {
            method: "DELETE"
        })
    }

    const editTasks = tasks => {
        return fetch(`http://localhost:8088/tasks/edit/${tasks.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tasks)
        })
            .then(getTasks)
    }

    return (
        <TasksContext.Provider value={{
            tasks, getTasks, editTasks, deleteTasks, addTasks, getTasksById, setSearchTerms, searchTerms
        }}>
            {props.children}
            </TasksContext.Provider>
    )
}