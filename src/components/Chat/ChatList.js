// import React, { useContext, useEffect, useState } from "react"
// import { ChatContext } from "./ChatProvider"
// import { ChatCard } from "./ChatCard"
// import "./Chat.css"
// import { useHistory } from "react-router-dom"

// export const ChatList = ({ }) => {
//     const { chat, getChat, searchTerms } = useContext(ChatContext)
//     const [filteredMessages, setFiltered] = useState([])
//     const history = useHistory()

//     // Empty dependency array - useEffect only runs after first render
//     useEffect(() => {
//         getChat()
//     }, [])

//     // useEffect dependency array with dependencies - will run if dependency changes (state)
//     // searchTerms will cause a change
//     useEffect(() => {
//         if (searchTerms !== "") {
//             // If the search field is not blank, display matching messages
//             const subset = chat.filter(chat => chat.message.toLowerCase().includes(searchTerms))
//             setFiltered(subset)
//         } else {
//             // If the search field is blank, display all messages
//             setFiltered(chat)
//         }
//     }, [searchTerms, chat])

//     return (
//         <>
//             <h1>Chat</h1>
//             <button onClick={() => history.push("/chat/create")}>
//                 Add Message
//             </button>
//             <div className="chats">
//                 {
//                     filteredMessages.map(chat => {
//                         return <ChatCard key={chat.id} chat={chat} />
//                     })
//                 }
//             </div>
//         </>
//     )
// }