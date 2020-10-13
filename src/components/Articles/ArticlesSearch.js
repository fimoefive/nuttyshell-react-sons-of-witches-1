import React, { useContext, useEffect } from "react"
import { ArticleContext } from "./ArticlesProvider"
import "./Articles.css"

export const ArticleSearch = () => {
    const { setSearchTerms } = useContext(ArticleContext)

    useEffect(() => {
		setSearchTerms("")
		
    }, [])

    return (
        <>
            Article search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for an article... " />
        </>
    )
}