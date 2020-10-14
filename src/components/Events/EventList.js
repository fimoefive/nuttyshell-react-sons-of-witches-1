import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import { EventCard } from "./EventCard";
import { useHistory } from "react-router-dom";
import "./Event.css";

export const EventList = () => {
    // This state changes when `getEvent()` is invoked below
    const { events, getEvents, searchTerms } = useContext(EventContext)
    const [filteredEvents, setFilteredEvents] = useState([])

    //useEffect - reach out to the world for something
    useEffect(() => {
        getEvents()
    }, [])

    const history = useHistory();

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = events.filter(event => event.name.includes(searchTerms.trim()))
            console.log(events)
            setFilteredEvents(subset)
        } else {
            setFilteredEvents(events)
        }
    }, [searchTerms, events])

    return (
        <>
            <h2>Events</h2>
            <button onClick={() => { history.push("/events/create") }}>
                Create Event
            </button>
            <div className="event">
                {
                    filteredEvents.map(event => {
                        return <EventCard key={event.id} events={event} />
                    })
                }
            </div>
        </>
    )
};