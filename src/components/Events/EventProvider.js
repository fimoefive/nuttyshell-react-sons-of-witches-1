import React, { useState, createContext } from 'react';

export const EventContext = createContext();

export const EventProvider = (props) => {
    const [events, setEvents] = useState([]);
    const [searchTerms, setSearchTerms] = useState([]);

    const getEvents = () => {
        return fetch('http://localhost:8088/events?_expand=user&_sort=id&_order=DESC')
            .then(res => res.json())
            .then(setEvents)
    };

    const addEvent = (event) => {
        return fetch('http://localhost:8088/events', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    };

    const getEventById = (id) => {
        return fetch(`http://localhost:8088/events/${id}?_expand=user`)
            .then(response => response.json())
    };

    const deleteEvent = eventId => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
    };

    const editEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEvents)
    };

    return (
        <EventContext.Provider value={{
            events, getEvents, addEvent, deleteEvent, editEvent, getEventById, setSearchTerms, searchTerms
        }}>
            {props.children}
        </EventContext.Provider>
    )
};