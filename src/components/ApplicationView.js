import React from "react"
import { Route } from "react-router-dom"
import { ArticleForm } from "./Articles/ArticlesForm"
import { ArticlesProvider } from "./Articles/ArticlesProvider"
import { ArticleSearch } from "./Articles/ArticlesSearch"
import { ArticlesList } from "./Articles/ArticlesList"
import { ArticleDetail } from "./Articles/ArticlesDetail"
import { TasksProvider } from "./Tasks/TasksProvider"
import { TasksList } from "./Tasks/TasksList"
import { TasksForm } from "./Tasks/TasksForm"
import { TasksDetail } from "./Tasks/TasksDetail"
import { Home } from "./Home"

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
        </>
    )
}