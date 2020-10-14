import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { EventContext } from "./EventProvider";
import "./Event.css";


export const EventForm = () => {
    const { addEvent, getEvents, getEventById, editEvent } = useContext(EventContext)

    //for edit, hold on to state of event in this view
    const [event, setEvent] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);
    const { eventId } = useParams();
    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    const handleControlledInputChange = (event) => {
        const newEvent = { ...event }
        //set the property to the new value
        newEvent[event.target.name] = event.target.value
        //updates state
        setEvent(newEvent)
    }

    useEffect(() => {
        getEvents().then(() => {
            if (eventId) {
                getEventById(eventId)
                    .then(event => {
                        setEvent(event)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructEventObject = () => {
        if (parseInt(event.name) === 0) {
            window.alert("Please select an event")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (eventId) {
                //PUT - update
                editEvent({
                    id: event.id,
                    name: event.name,
                    time: event.time,
                    date: event.date,
                    description: event.description,
                    userId: parseInt(event.userId)
                })
                    .then(() => history.push("/events"))
            } else {
                //POST - add
                addEvent({
                    name: event.name,
                    time: event.time,
                    date: event.date,
                    description: event.description,
                    userId: parseInt(localStorage.getItem("nutshell_customer"))
                })
                    .then(() => history.push("/events"))
            }
        }
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__name">{eventId ? "Edit Event" : "Create Event"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventName">Event Name:</label>
                    <input type="text" id="eventName" name="name" required autoFocus className="form-control"
                        placeholder="Event Name"
                        onChange={handleControlledInputChange}
                        defaultValue={event.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input type="time"
                        name="time" id="eventTime" className="form-control"
                        placeholder="Time"
                        onChange={handleControlledInputChange}
                        defaultValue={event.time} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input type="date"
                        name="date" id="eventDate" className="form-control"
                        placeholder="Date"
                        onChange={handleControlledInputChange}
                        defaultValue={event.date} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <input type="text"
                        name="description" id="eventDescription" className="form-control"
                        placeholder="Description"
                        onChange={handleControlledInputChange}
                        defaultValue={event.description} />
                </div>
            </fieldset>
            <button type="submit"
                className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructEventObject()
                }}>
                {eventId ? "Save Event" : "Create Event"}</button>
        </form>
    )
};