import React from "react"
import { Route } from "react-router-dom"
import { ArticleForm } from "./Articles/ArticlesForm"
import { ArticlesProvider } from "./Articles/ArticlesProvider"
import { ArticleSearch } from "./Articles/ArticlesSearch"
import { ArticlesList } from "./Articles/ArticlesList"
import { ArticleDetail } from "./Articles/ArticlesDetail"
import { Home } from "./Home"

import { ChatProvider } from "./Chat/ChatProvider"
import { ChatForm } from "./Chat/ChatForm"
import { ChatSearch } from "./Chat/ChatSearch"
import { ChatList } from "./Chat/ChatList"
import { ChatDetail } from "./Chat/ChatDetail"



export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

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
                <Route path="/chats/create">
                    <ChatForm />
                </Route>
            </ChatProvider>

            <ChatProvider>
                <Route exact path="/chats">
                    {/* <ChatSearch /> */}
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