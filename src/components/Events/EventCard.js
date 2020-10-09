import React from "react"
import "./Event.css"

export const EventCard = ({event, address, description, time, date}) => (
    <section className="events">
        <h3 className="event__name">{event}</h3>
        <div className="event__address">{address}</div>
        <div className="event__description">{description}</div>
        <div className="event__time">{time}</div>
        <div className="event__date">{date}</div>
    </section>
);