import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider";
import { EventCard } from "./EventCard";
import "./Event.css";

export const EventList = () => {
    // This state changes when `getCustomers()` is invoked below
    const { events, getEvents } = useContext(EventContext)
	
    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("EventList: useEffect - getEvents")
        getEvents()
		
    }, [])
return (	
		<div className="events">
		    {console.log("EventList: Render")}
        {
			events.map(event => {
				return <EventCard key={event.id} address={event.address} event={event.name} />
			})
        }
        </div>
    )};