import React, { useContext, useEffect, useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import { FriendContext } from "./FriendsProvider"

export const FriendForm = () => {
    const { getFriends, addFriend, getUsers } = useContext(FriendContext)

    const [friends, setFriends] = useState([])
    const [friend, setFriend] = useState([])
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()

    const friendName = useRef()

    const handleControlledInputChange = (event) => {
        const newFriend = { ...friend }
        newFriend[event.target.name] = event.target.value
        setFriend(newFriend)
    }

    useEffect(() => {
        getFriends().then(res => {
            const x = res.filter(user => user.activeUserId === parseInt(localStorage.getItem("nutshell_customer")))
            setFriends(x)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        getUsers().then(setUsers)
    }, [])

    const constructFriendObject = () => {

        const foundFriend = users.find(user => user.username === friendName.current.value)

        if (!foundFriend) {
            window.alert("That user does not exist!")
        }
        else if (foundFriend.id === parseInt(localStorage.getItem("nutshell_customer"))) { 
            window.alert("You can not add yourself!") 
        }
        else {
            setIsLoading(true)
            addFriend({
                userId: foundFriend.id,
                activeUserId: parseInt(localStorage.getItem("nutshell_customer")),
            })
            .then(() => {
                history.push("/")
            })
        }
    }

    return (
        <form className="friendForm">
            <h2 className="friendForm_title">Add Friend</h2>
            <fieldset>
                <div className="from-group">
                    <label htmlFor="friendName">UserName</label>
                    <input type="text" ref={friendName} id="articleName" name="name" required autoFocus className="from-control"
                        placeholder="Friends Name"
                        onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructFriendObject()
                }}>Save Friend</button>
        </form>
    )
}

