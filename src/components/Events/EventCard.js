import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";

export const EventCard = ({ event }) => (
    <section className="events">
        <h3 className="event__name">{event?.name}</h3>
        <Link to={`/events/detail/${event?.id}`}>
            {event?.name}
        </Link>
        <div className="event__description">{event?.description}</div>
        <div className="event__time">{event?.time}</div>
        <div className="event__date">{event?.date}</div>
        {/* <div className="event__user">Posted by: {event.user.username}</div> */}
    </section>
);