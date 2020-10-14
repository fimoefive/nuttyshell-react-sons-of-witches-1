import React from "react";
import { Route } from "react-router-dom";
import { ArticleForm } from "./Articles/ArticlesForm"
import { ArticlesProvider } from "./Articles/ArticlesProvider"
import { ArticleSearch } from "./Articles/ArticlesSearch"
import { ArticlesList } from "./Articles/ArticlesList"
import { ArticleDetail } from "./Articles/ArticlesDetail"
import { TasksProvider } from "./Tasks/TasksProvider"
import { TasksList } from "./Tasks/TasksList"
import { TasksForm } from "./Tasks/TasksForm"
import { TasksDetail } from "./Tasks/TasksDetail"
import { EventForm } from "./Events/EventForm";
import { EventProvider } from "./Events/EventProvider";
import { EventSearch } from "./Events/EventSearch";
import { EventList } from "./Events/EventList";
import { EventDetail } from "./Events/EventDetail";
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




            <TasksProvider>
                <Route exact path="/tasks">
                    <TasksList />
                </Route>
            </TasksProvider>

            <TasksProvider>
                <Route exact path="/tasks/create">
                    <TasksForm />
                </Route>
            </TasksProvider>

            <TasksProvider>
                <Route exact path="/tasks/detail/:tasksId(\d+)">
                    <TasksDetail />
                </Route>
            </TasksProvider>

            <TasksProvider>
                <Route exact path="/tasks/edit/:tasksId(\d+)">
                    <TasksForm />
                </Route>
            </TasksProvider>


            
            <EventProvider>
                <Route exact path="/events">
                    <EventSearch />
                    <EventList />
                </Route>
            </EventProvider>

            <EventProvider>
                <Route exact path="/events/detail/:eventId(\d+)">
                    <EventDetail />
                </Route>
            </EventProvider>

            <EventProvider>
                <Route exact path="/events/create">
                    <EventForm />
                </Route>
            </EventProvider>

            <EventProvider>
                <Route exact path="/events/edit/:eventId(\d+)">
                    <EventForm />
                </Route>
            </EventProvider>



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