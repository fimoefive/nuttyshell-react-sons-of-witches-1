import React from "react"
import { Route } from "react-router-dom"
import { ArticleForm } from "./Articles/ArticlesForm"
import { ArticlesProvider } from "./Articles/ArticlesProvider"
import { ArticleSearch } from "./Articles/ArticlesSearch"
import { ArticlesList } from "./Articles/ArticlesList"
import { ArticleDetail } from "./Articles/ArticlesDetail"
import { Home } from "./Home"
import { EventForm } from "./Events/EventForm";
import { EventProvider } from "./Events/EventProvider";
import { EventSearch } from "./Events/EventsSearch";
import { EventList } from "./Events/EventList";
import { EventDetail } from "./Events/EventsDetail";

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

            <EventsProvider>
                <Route exact path="/events">
                    <EventSearch />
                    <EventList />
                </Route>
            </EventsProvider>

            <EventsProvider>
                <Route exact path="/events/detail/:eventId(\d+)">
                    <EventDetail />
                </Route>
            </EventsProvider>

            <EventsProvider>
                <Route exact path="/events/create">
                    <EventForm />
                </Route>
            </EventsProvider>

            <EventsProvider>
                <Route exact path="/events/edit/:eventId(\d+)">
                    <EventForm />
                </Route>
            </EventsProvider>

        </>
    )
}