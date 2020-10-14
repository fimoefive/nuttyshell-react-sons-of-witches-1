import React, { useContext, useEffect, useState } from "react"
import { FriendContext } from "./FriendsProvider"
import { FriendCard } from "./FriendsCard"
import "./Friends.css"
import { useHistory } from "react-router-dom"

export const FriendsList = () => {
    const { getFriends, friends } = useContext(FriendContext)
    const [friendList, setFriends ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getFriends().then(res => {
            const x = res.filter(user => user.activeUserId === parseInt(localStorage.getItem("nutshell_customer")))
            setFriends(x)
        })
    }, [])

    return (
        <>
            <h2>Friends List</h2>
            <button className="add_friend" onClick={() => {
                history.push("/friends/create")
            }}>Add Friend</button>
            <div className="friends">
                {
                    friendList.map(friend => {
                        return <FriendCard key={friend.id} friends={friend} />
                    })
                }
            </div>
        </>
    )

}