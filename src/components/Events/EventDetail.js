import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import "./Event.css";
import { useParams, useHistory } from "react-router-dom";

export const EventDetail = () => {

    const { events, getEventById, releaseEvent } = useContext(EventContext)

    const [event, setEvent] = useState({})
    const [location, setLocation] = useState({})

    const { eventId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", eventId)
        getEventById(eventId)
            .then((response) => {
                setAnimal(response)
                setLocation(response.location)
            })
    }, [])

    return (
        <section className="event">
            <h3 className="event__name">{animal.name}</h3>
            <div className="event__description">{event.description}</div>
            <div className="event__location">Location: {location.name}</div>

            <button onClick={() => {
                releaseEvent(event.id)
                    .then(() => {
                        history.push("/events")
                    })
            }}>Delete Event
            </button>

            <button onClick={() => {
                history.push(`/events/edit/${event.id}`)
            }}>Edit
            </button>
        </section>
    )
};