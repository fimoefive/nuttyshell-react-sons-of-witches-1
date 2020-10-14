import React from "react"
import { Route } from "react-router-dom"
import { ArticleForm } from "./Articles/ArticlesForm"
import { ArticlesProvider } from "./Articles/ArticlesProvider"
import { ArticleSearch } from "./Articles/ArticlesSearch"
import { ArticlesList } from "./Articles/ArticlesList"
import { ArticleDetail } from "./Articles/ArticlesDetail"
import { Home } from "./Home"
import { FriendsList } from "./Friends/FriendsList"
import { FriendsProvider } from "./Friends/FriendsProvider"

import { ChatProvider } from "./Chat/ChatProvider"
import { ChatForm } from "./Chat/ChatForm"
import { ChatList } from "./Chat/ChatList"
import { ChatDetail } from "./Chat/ChatDetail"
import { FriendForm } from "./Friends/FriendsForm"



export const ApplicationViews = () => {
    return (
        <>
            <FriendsProvider>
                <Route exact path="/">
                    <Home />
                    <FriendsList />
                </Route>
            </FriendsProvider>

            <FriendsProvider>
                <Route exact path="/friends/create">
                    <FriendForm />
                </Route>
            </FriendsProvider>

            <ArticlesProvider>
                <Route exact path="/articles">
                    <ArticleSearch />
                    <ArticlesList />
                </Route>
            </ArticlesProvider>

            <ArticlesProvider>
                <Route exact path="/articles/detail/:articleId(\d+)">
                    <ArticleDetail />
                </Route>
            </ArticlesProvider>

            <ArticlesProvider>
                <Route exact path="/articles/create">
                    <ArticleForm />
                </Route>
            </ArticlesProvider>

            <ArticlesProvider>
                <Route exact path="/articles/edit/:articleId(\d+)">
                    <ArticleForm />
                </Route>
            </ArticlesProvider>




            <ChatProvider>
                <Route exact path="/chats/create">
                    <ChatForm />
                </Route>
            </ChatProvider>

            <ChatProvider>
                <Route exact path="/chats/edit/:chatId(\d+)">
                    <ChatForm />
                </Route>
            </ChatProvider>

            <ChatProvider>
                <Route exact path="/chats">
                    <ChatList />
                </Route>
            </ChatProvider>

            <ChatProvider>
                <Route exact path="/chats/detail/:chatId(\d+)">
                    <ChatDetail />
                </Route>
            </ChatProvider>

        </>
    )
}