import React, { useState, createContext } from 'react';

export const EventContext = createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        return fetch('http://localhost:8088/events?_expand=location')
        .then(res => res.json())
        .then(setEvents)
    }

    const addEvent = (events) => {
        return fetch('http://localhost:8088/events', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(events)
        })
        .then(getEvents)
    }

    return (
        <EventContext.Provider value = {{
            events, getEvents, addEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )};