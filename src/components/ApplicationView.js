import React from "react"
import { Route } from "react-router-dom"
import { ArticleForm } from "./Articles/ArticlesForm"
import { ArticleProvider } from "./Articles/ArticlesProvider"
import { ArticleSearch } from "./Articles/ArticlesSearch"
import { ArticleList } from "./Articles/ArticlesList"
import { Home } from "./Home"

export const ApplicationViews = (props) => {
    return (
        <>
            <Route exact path= "/">
                <Home />
            </Route>

            <ArticleProvider>
                <Route exact path="/articles">
                    <ArticleSearch />
                    <ArticleList />
                </Route>
            </ArticleProvider>

            <ArticleProvider>
                <Route exact path="/articles/create">
                    <ArticleForm />
                </Route>
            </ArticleProvider>

            <ArticleProvider>
                <Route exact path="/articles/detail/:articleId(\d+)">
                    <ArticleForm />
                </Route>
            </ArticleProvider>
        </>
    )
}