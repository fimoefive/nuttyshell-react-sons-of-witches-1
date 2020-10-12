import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticlesProvider"
import { ArticleCard } from "./ArticlesCard"
import { useHistory } from "react-router-dom"
import "./Articles.css"

export const ArticlesList = () => {
    const { articles, getArticles, searchTerms } = useContext(ArticleContext)
    const [ filteredArticles, setFilteredArticles ] = useState([])

    useEffect(() => {
        getArticles()
    }, [])

    const history = useHistory()

    useEffect(() => {
        if(searchTerms !== "") {
            const subset = articles.filter(article => article.title.toLowerCase().includes(searchTerms.toLowerCase().trim()))
            setFilteredArticles(subset)
        } else {
            setFilteredArticles(articles)
        }
    }, [searchTerms, articles])

    return (
        <>
            <h2>Articles</h2>
            <button onClick={() => {history.push("/articles/create")}}>
                Create News Article
            </button>
            <div className="articles">
                {
                    filteredArticles.map(article => {
                        return <ArticleCard key={article.id} articles={article} />
                    })
                }
            </div>
        </>
    )
}