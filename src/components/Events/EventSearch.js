import React, { useContext, useEffect } from "react";
import { EventContext } from "./EventProvider";
import "./Event.css";

export const EventSearch = () => {
    const { setSearchTerms } = useContext(EventContext)

    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
        <>
            Event search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for an event... " />
        </>
    )
};