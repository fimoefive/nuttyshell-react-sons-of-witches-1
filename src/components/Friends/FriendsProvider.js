import React, { useState, createContext } from "react"

export const FriendContext = createContext();

export const FriendsProvider = (props) => {
    const [friends, setFriends] = useState([]);
    const [searchTerms, setSearchTerms] = useState([]);

    const getFriends = () => {
        return fetch(`http://localhost:8088/friends?_expand=user`)
            .then(response => response.json())
            .then(res => {
                setFriends(res)
            return res
        })
    }

    const addFriend = (x) => {
        return fetch(`http://localhost:8088/friends`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(x)
        })
            .then(getFriends)
    }

    const deleteFriend = (x) => {
        return fetch(`http://localhost:8088/friends/${x}`, {
            method: "DELETE"
        })
    }

    const getUsers = () => {
        return fetch(`http://localhost:8088/users`)
            .then(res => res.json())
    }

    return (
        <FriendContext.Provider value={{
            friends, getUsers, getFriends, deleteFriend, addFriend, searchTerms, setSearchTerms
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}