import React, { useState, createContext } from "react"

export const ArticleContext = createContext();

export const ArticleProvider = (props) => {
    console.log("provider works")
    const [articles, setArticles] = useState();
    const [searchTerms, setSearchTerms] = useState();

    const getArticles = () => {
        return fetch(`http://localhost:8088/articles?_expand=user`)
            .then(response => response.json())
            .then(setArticles)
    }

    const addArticle = (x) => {
        return fetch(`http://localhost:8088/articles`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
            .then(getArticles)
    }
    const getArticleById = (id) => {
        return fetch(`http://localhost:8088/articles/${id}?_expand=user`)
            .then(response => response.json())
    }

    const deleteArticle = articleId => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE"
        })
            .then(getArticles)
    }

    const editArticle = article => {
        return fetch(`http://localhost:8088/articles/${article.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        })
            .then(getArticles)
    }

    return (
        <ArticleContext.Provider value={{
            articles, getArticles, addArticle, getArticleById, deleteArticle, editArticle, setSearchTerms, searchTerms
        }}>
            {props.childern}
            </ArticleContext.Provider>
    )
}