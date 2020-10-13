import React, { useState, createContext } from "react"

export const TasksContext = createContext();

export const TasksProvider = (props) => {
    const [Tasks, setTasks] = useState([]);
    const [searchTerms, setSearchTerms] = useState();

    const getTasks = () => {
        return fetch(`http://localhost:8088/tasks?_expand=user`)
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
        return fetch(`http://localhost:8088/tasks/${id}?_expand=user`)
            .then(response => response.json())
    }

    const deleteTasks = TasksId => {
        return fetch(`http://localhost:8088/tasks/${TasksId}`, {
            method: "DELETE"
        })
    }

    const editTasks = Task => {
        return fetch(`http://localhost:8088/tasks/${Tasks.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Task)
        })
            .then(getTasks)
    }

    return (
        <TasksContext.Provider value={{
            Tasks, getTasks, editTasks, deleteTasks, addTasks, getTasksById, setSearchTerms, searchTerms
        }}>
            {props.children}
            </TasksContext.Provider>
    )
}