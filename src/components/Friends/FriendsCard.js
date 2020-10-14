import React, { useContext } from "react"
import "./Friends.css"
import { FriendContext } from "./FriendsProvider"
import { useHistory } from "react-router-dom"
import { FriendsList } from "./FriendsList.js"

export const FriendCard = ({ friends }) => {

    const { deleteFriend, getFriends } = useContext(FriendContext)
    const history = useHistory()
    const handleDelete = (x) => {
        deleteFriend(x).then(getFriends).then(e => {
            history.push("/articles")
            history.push("/")
        })
    }
        return (
            <section className="friends">
                <div className="friend_name">{friends.user.username}</div>
                <button onClick={
                    () => {
                        handleDelete(friends.id)
                    }}>Delete Friend
                    </button>
            </section>
        )
}