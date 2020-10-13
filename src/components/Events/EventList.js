import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider";
import { EventCard } from "./EventCard";
import "./Event.css";

export const EventList = () => {
    // This state changes when `getCustomers()` is invoked below
    const { events, getEvents } = useContext(EventContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        getEvents()

    }, [])
    return (
        <>
            <h2>Events</h2>
            <div className="events">
                {
                    events.map(event => {
                        return <EventCard key={event.id} events={event} />
                    })
                }
            </div>
        </>
    )
};