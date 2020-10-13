import React, { useContext } from "react"
import "./Friends.css"
import { FriendContext } from "./FriendsProvider"
import { useHistory } from "react-router-dom"
import { FriendsList } from "./FriendsList.js"

export const FriendCard = ({ friends }) => {

    const { deleteFriend } = useContext(FriendContext)
    const history = useHistory()
    
        return (
            <section className="friends">
                <div className="friend_name">{friends.user.username}</div>
                <button onClick={
                    () => {
                        deleteFriend(friends.id)
                    }}>Delete Friend
                    </button>
            </section>
        )
}