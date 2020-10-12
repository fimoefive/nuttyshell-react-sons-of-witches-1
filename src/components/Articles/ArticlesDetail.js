import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticlesProvider"
import "./Articles.css"
import { useParams, useHistory } from "react-router-dom"

export const ArticleDetail = () => {
	const { deleteArticle, getArticleById } = useContext(ArticleContext)

	const [article, setArticle] = useState()
	
	const { articleId } = useParams();
	const history = useHistory();

	const user = parseInt(localStorage.getItem("nutshell_customer"))

	const [owned, setOwned] = useState(false)


	useEffect(() => {
		getArticleById(articleId)
			.then((response) => {
				setArticle(response)
				if(user === response.user.id) {
					setOwned(true)
				}	
			})
	}, [])

	return (
		<section className="article">
			<h3 className="article__name">{article?.title}</h3>
			<div className="article__summary">{article?.summary}</div>
            <div className="article__URL">{article?.URL}</div>
			<div className="article__user">Posted by: {article?.user.username}</div>
			<div className="article__date">At:{article?.date}</div>
			<button 
			hidden={!owned}
			onClick={
				() => {
					deleteArticle(article.id)
						.then(() => {
							history.push("/articles")
						})
				}}>Delete Article
			</button>
			<button 
			hidden={!owned}
			onClick={() => {
				history.push(`/articles/edit/${article.id}`)
			}}>Edit</button>
		</section>
	)
}