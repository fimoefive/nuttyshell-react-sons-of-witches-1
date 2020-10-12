import React, { useContext, useEffect, useRef, useState } from "react"
import { ChatContext } from "./ChatProvider"
import "./Chat.css"
import { useHistory, useParams } from 'react-router-dom';

export const ChatForm = () => {
    const { addChat } = useContext(ChatContext)

    const history = useHistory();

    // //when field changes, update state. This causes a re-render and updates the view. Controlled component
    // const handleControlledInputChange = (event) => {
    //     //When changing a state object or array, always create a copy make changes, and then set state.
    //     const newChat = { ...chat }
    //     //chat is an object with properties. set the property to the new value
    //     newChat[event.target.name] = event.target.value
    //     //update state
    //     setChat(newChat)
    // }

    // If chatId is in the URL, chatId


    const message = useRef(null)

    const constructChatObject = () => {


        addChat({

            message: message
        })
            .then(() => history.push("/chats"))
    }

    //this form is used to add new chats
    return (
        <form className="chatForm" id="chatForm">
            <h2 className="chatForm__title" id="chatForm__title">Chat</h2>
            <fieldset>
                <div className="form-group">
                    <input type="text" id="message" ref={message} required autoFocus className="form-control" placeholder="What's on your mind?" />
                </div>


            </fieldset>
            <button className="btn btn-primary"

                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructChatObject()
                }}>Submit Message</button>
        </form>
    )
}



// <div className="form-group">
//                     <input type="text" id="chatName" name="name" required autoFocus className="form-control"
//                         placeholder="What's on your mind?"
//                         onChange={handleControlledInputChange}
//                         defaultValue={message}
//                     />
//                 </div>



// let message
//     const constructChatObject = () => {
//         if (parseInt(chat.chatId) === null) {
//             window.alert("Please enter a message before clicking the Submit Message button")
//         } else {
//             //disable the button - no extra clicks
//             setIsLoading(true);
//             if (chatId) {
//                 //PUT - update
//                 updateChat({
//                     userId: parseInt(chat.userId),
//                     message
//                 })
//                     .then(() => history.push(`/chats/detail/${chat.id}`))
//             } else {
//                 //POST - add
//                 addChat({
//                     userId: parseInt(chat.userId),
//                     message
//                 })
//                     .then(() => history.push("/chats"))
//             }
//         }
//     }