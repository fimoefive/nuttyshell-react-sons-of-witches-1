import React, { useContext, useEffect, useState } from "react"
import { FriendContext } from "./FriendsProvider"
import { FriendCard } from "./FriendsCard"
import { useHistory } from "react-router-dom"
import "./Friends.css"

export const FriendsList = () => {
    const { getFriends, searchTerms, getUserById } = useContext(FriendContext)
    const [filteredFriends, setFilteredFriends] = useState([])
    const [friends, setFriends ] = useState([])

    useEffect(() => {
        getFriends().then(res => {
            const x = res.filter(user => user.activeUserId === parseInt(localStorage.getItem("nutshell_customer")))
            setFriends(x)
        })
    }, [friends])

    return (
        <>
            <h2>Friends List</h2>
            <div className="friends">
                {
                    friends.map(friend => {
                        return <FriendCard key={friend.id} friends={friend} />
                    })
                }
            </div>
        </>
    )

}