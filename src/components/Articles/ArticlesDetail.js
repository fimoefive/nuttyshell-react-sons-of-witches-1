import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticlesProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const ArticleDetail = () => {
	const { deleteArticle, getArticleById } = useContext(ArticleContext)

	const [article, setArticle] = useState({})

	const { articleId } = useParams();
	const history = useHistory();

	useEffect(() => {
		getArticleById(articleId)
			.then((response) => {
				setArticle(response)
			})
	}, [])

	return (
		<section className="article">
			<h3 className="article__name">{article.title}</h3>
			<div className="animal__summary">{article.summary}</div>
            <div className="animal__URL">{article.URL}</div>
			<button onClick={
				() => {
					deleteArticle(article.id)
						.then(() => {
							history.push("/articles")
						})
				}}>Delete Article
			</button>
			<button onClick={() => {
				history.push(`/articles/edit/${article.id}`)
			}}>Edit</button>
		</section>
	)
}