import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { ChatProvider } from "./Chat/ChatProvider"
import { ChatForm } from "./Chat/ChatForm.js"
// import { ChatList } from "./Chat/ChatList"


export const ApplicationViews = (props) => {
    return (
        <>

            <Route exact path="/">

                <Home />
            </Route>

            {/* Render the chat list when http://localhost:3000/chats
            <ChatProvider>
                <Route exact path="/chats">
                    <ChatList />
                </Route>
            </ChatProvider> */}

            {/* Render ChatForm when http://localhost:3000/chats */}
            <ChatProvider>
                <Route path="/chats">
                    <ChatForm />
                </Route>
            </ChatProvider>
        </>
    )
}