import React, { useState, createContext } from "react"

export const ChatContext = createContext()

const getChatById = (id) => {
    return fetch(`http://localhost:8088/messages/${id}?_expand=user`)
        .then(res => res.json())
}

export const ChatProvider = (props) => {
    const [messages, setMessages] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getChat = () => {
        return fetch("http://localhost:8088/messages")
            .then(res => res.json())
            .then(setMessages)
    }

    const addChat = (chat) => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chat)
        })
            .then(getChat)
    }

    const deleteChat = (chatId) => {
        return fetch(`http://localhost:8088/messages/${chatId}`, {
            method: "DELETE"
        })
            .then(getChat)
    }

    const editChat = chat => {
        return fetch(`http://localhost:8088/messages/${chat.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(chat)
        })
            .then(getChat)
    }

    return (
        <ChatContext.Provider value={{
            messages, getChat, addChat, getChatById, deleteChat, editChat, searchTerms, setSearchTerms
        }}>
            {props.children}
        </ChatContext.Provider>
    )
}

