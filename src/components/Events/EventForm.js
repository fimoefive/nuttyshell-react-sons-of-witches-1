import React, { useContext, useEffect, useState } from "react";
import { EventContext } from "./EventProvider";
import "./Event.css";
import { useHistory, useParams } from "react-router-dom";

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
        //animal is an object with properties. 
        //set the property to the new value
        newEvent[event.target.name] = event.target.value
        //update state
        setEvent(newEvent)
    }

    // Get customers and locations. If animalId is in the URL, getAnimalById
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
                    description: event.description,
                    time: event.time,
                    date: event.date,
                    userId: parseInt(event.userId)
                })
                    .then(() => history.push(`/events`))
            } else {
                //POST - add
                addEvent({
                    name: event.name,
                    description: event.description,
                    time: event.time,
                    date: event.date,
                    userId: parseInt(localStorage.getItem("nutshell_customer"))
                })
                    .then(() => history.push("/events"))
            }
        }
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__name">{eventId ? `Edit Event ${event.name}` : "Create Event"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventName">Event Name:</label>
                    <input type="text" id="eventName" name="name" required autoFocus className="form-control"
                        placeholder="Event name"
                        onChange={handleControlledInputChange}
                        defaultValue={event.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Event description</label>
                    <input type="text
                    " name="description" id="eventDescription" className="form-control"
                        placeholder="Description"
                        onChange={handleControlledInputChange}>
                        defaultValue={event.description}
                    </input>
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