import React, { useContext, useEffect, useState } from "react"
import { ChatContext } from "./ChatProvider"
import { useHistory, useParams } from 'react-router-dom';
import "./Chat.css"

export const ChatForm = () => {
    const { getChat, getChatById, editChat, addChat } = useContext(ChatContext)

    const [chat, setChat] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { chatId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMessage = chat
        newMessage[event.target.message] = event.target.value
        setChat(newMessage)
    }

    useEffect(() => {
        getChat().then(() => {
            if (chatId) {
                getChatById(chatId)
                    .then(chat => {
                        setChat(chat)
                        setIsLoading(false)
                    })
            } else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructChatObject = () => {
        setIsLoading(true)
        if (chatId) {
            editChat({
                message: chat
            })
                .then(() => history.push("/chats"))
        }
        else {
            addChat({
                userId: parseInt(localStorage.getItem("nutshell_customer")),
                message: chat.message
            })
                .then(() => history.push("/chats"))
        }
    }

    return (
        <form className="chatForm" id="chatForm">
            <h2 className="chatForm__title" id="chatForm__title">Chat</h2>
            <fieldset>
                <div className="form-group">
                    <input type="text" id="message" title="title" required autoFocus className="form-control"
                        placeholder="What's on your mind?"
                        onChange={handleControlledInputChange}
                        defaultValue={chat.message} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructChatObject()
                }}>Submit Message</button>
        </form>
    )
}