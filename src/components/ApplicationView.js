import React from "react";
import { Route } from "react-router-dom"
import { ArticleForm } from "./Articles/ArticlesForm"
import { ArticlesProvider } from "./Articles/ArticlesProvider"
import { ArticleSearch } from "./Articles/ArticlesSearch"
import { ArticlesList } from "./Articles/ArticlesList"
import { ArticleDetail } from "./Articles/ArticlesDetail"
import { EventForm } from "./Events/EventForm";
import { EventProvider } from "./Events/EventProvider";
import { EventSearch } from "./Events/EventSearch";
import { EventList } from "./Events/EventList";
import { EventDetail } from "./Events/EventDetail";
import { Home } from "./Home"
import { FriendsList } from "./Friends/FriendsList"
import { FriendsProvider } from "./Friends/FriendsProvider"

export const ApplicationViews = () => {
    return (
        <>
            <FriendsProvider>
                <Route exact path="/">
                    <Home />
                    <FriendsList />
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
        </>
    )
}