import React, { useEffect } from "react"

// Redux:
import { useDispatch } from "react-redux"
import { loadGames } from "../actions/gamesAction"

const Home = () => {
    // Fetch Games:
    const dispatch = useDispatch()

    // As soon as the "App" component renders, we will "dispatch" loadGames() information:
    useEffect(() => {
        dispatch(loadGames())
    })

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

export default Home
