import React, { useEffect } from "react"

// Redux:
import { useDispatch, useSelector } from "react-redux"
import { loadGames } from "../actions/gamesAction"

// Components:
import Game from "../components/Game"
import GameDetails from "../components/GameDetails"

// Styling and Animation:
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { useLocation } from "react-router-dom"

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

const Home = () => {
    // Getting current "location":
    const location = useLocation()
    const pathID = location.pathname.split("/")[2]

    // Fetch Games:
    const dispatch = useDispatch()

    // As soon as the "App" component renders, we will "dispatch" loadGames() information:
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    // Getting back the data:
    const { popularGames, newGames, upcomingGames } = useSelector((state) => state.games)
    console.log("Popular Games:", popularGames)
    console.log("New Games:", newGames)
    console.log("Upcoming Games", upcomingGames)

    return (
        <GameList>
            {pathID && <GameDetails />}
            <h2>Upcoming Games</h2>
            <Games>
                {upcomingGames.map((game) => (
                    <Game key={game.id} id={game.id} name={game.name} image={game.background_image} released={game.released}/>
                ))}
            </Games>

            <h2>Popular Games</h2>
            <Games>
                {popularGames.map((game) => (
                    <Game key={game.id} id={game.id} name={game.name} image={game.background_image} released={game.released}/>
                ))}
            </Games>

            <h2>New Games</h2>
            <Games>
                {newGames.map((game) => (
                    <Game key={game.id} id={game.id} name={game.name} image={game.background_image} released={game.released}/>
                ))}
            </Games>
        </GameList>
    )
}

export default Home
