import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import "./Event.css";
import { useParams, useHistory } from "react-router-dom";

export const EventDetail = () => {
    const { getEventById, deleteEvent } = useContext(EventContext)

    const [event, setEvent] = useState();

    const { eventId } = useParams();

    const history = useHistory();

    const user = parseInt(localStorage.getItem("nutshell_customer"))

    const [owned, setOwned] = useState(false)

    useEffect(() => {
        getEventById(eventId)
            .then((response) => {
                setEvent(response)
                if (user === response.user.id) {
                    setOwned(true)
                }
            })
    }, [])

    return (
        <section className="event">
            <h3 className="event__name">{event?.name}</h3>
            <div className="event__description">{event?.description}</div>
            <div className="event__time">{event?.time}</div>
            <div className="event__date">Posted on: {event?.date}</div>
            <div className="event__user">Posted by: {event?.user.username}</div>

            <button hidden={!owned}
                onClick={() => {
                    deleteEvent(event.id)
                        .then(() => {
                            history.push("/events")
                        })
                }}>Delete Event
            </button>

            <button hidden={!owned}
                onClick={() => {
                    history.push(`/events/edit/${event.id}`)
                }}>Edit</button>
        </section>
    )
};