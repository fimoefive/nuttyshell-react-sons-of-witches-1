import React, { useContext, useEffect } from "react"
import { FriendContext } from "./FriendsProvider"

export const FriendSearch = () => {
    const { setSearchTerms } = useContext(FriendContext)

    useEffect(() => {
        setSearchTerms("")
    }, [])

    return (
        <>
            Friends Search:
            <input type="text" className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for a friend..." />
        </>
    )
}