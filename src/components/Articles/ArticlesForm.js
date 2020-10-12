import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "../Articles/ArticlesProvider"
import { useHistory, useParams } from "react-router-dom"

export const ArticleForm = () => {
    const { getArticles, getArticleById, editArticle, addArticle } = useContext(ArticleContext)

    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {articleId} = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newArticle = {...article}
        newArticle[event.target.title] = event.target.value
        setArticle(newArticle)
    }

    useEffect(() => {
        getArticles().then(() => {
            if(articleId) {
                getArticleById(articleId)
                .then(article => {
                    setArticle(article)
                    setIsLoading(false)
                })
            }else {
                setIsLoading(false)
            }
        })
    }, [])

    const constructArticleObject = () => {
        if(parseInt(article.title) === 0) {
            window.alert("Select a title")
        } 
        else {
            setIsLoading(true)
            if(articleId){
                editArticle({
                    id: article.id,
                    title: article.title,
                    summary: article.summary,
                    URL: article.URL,
                    userId: parseInt(article.userId)
                })
                .then(() => history.push("/articles"))
            }
            else {
                addArticle({
                    title: article.title,
                    summary: article.summary,
                    URL: article.URL,
                    userId: parseInt(localStorage.getItem("nutshell_customer"))
                })
                .then(() => history.push("/articles"))
            }
        }
    }

    return (
        <form className="articleForm">
            <h2 className="articleForm_title">{articleId ? "Edit Article" : "Create News Article"}</h2>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="articleTitle">Article Title</label>
                    <input type="text" id="articleTitle" title="title" required autoFocus className="from-control"
                    placeholder="Title"
                    onChange={handleControlledInputChange}
                    defaultValue={article.title}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="articleSummary">Article Summary</label>
                    <input type="text" id="articleSummary" title="summary" required autoFocus className="from-control"
                    placeholder="Summary"
                    onChange={handleControlledInputChange}
                    defaultValue={article.summary}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="articleURL">Article URL</label>
                    <input type="text" id="articleURL" title="URL" required autoFocus className="from-control"
                    placeholder="URL"
                    onChange={handleControlledInputChange}
                    defaultValue={article.URL}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructArticleObject()
                }}>
            {articleId ? "Save Article" : "Create News Article"}</button>
        </form>
    )
}