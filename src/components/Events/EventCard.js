import React from "react";
import "./Event.css";
import { Link } from "react-router-dom";

export const EventCard = ({ events }) => (
    <section className="events">
        <h3 className="event__name">{events.name}</h3>
        <Link to={`/events/detail/${events.id}`}>
            {events.name}
        </Link>
        <div className="event__time">{events.time}</div>
        <div className="event__date">{events.date}</div>
        <div className="event__description">{events.description}</div>
        <div className="event__user">Event by: {events.user.username}</div>
    </section>
);