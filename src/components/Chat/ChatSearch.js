import React, { useContext } from "react"
import { ChatContext } from "./ChatProvider"
import "./Chat.css"

export const ChatSearch = () => {
    const { setSearchTerms } = useContext(ChatContext)

    return (
        <>
            Messages Search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Enter your search terms ... " />
        </>
    )
}