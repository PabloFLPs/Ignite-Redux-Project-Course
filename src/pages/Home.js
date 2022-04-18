import React, { useEffect } from "react"

// Redux:
import { useDispatch, useSelector } from "react-redux"
import { loadGames } from "../actions/gamesAction"

// Components:
import Game from "../components/Game"
import GameDetails from "../components/GameDetails"

// Styling and Animation:
import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import { useLocation } from "react-router-dom"

const GameList = styled(motion.div)`
    padding: 3rem 5rem;
    
    h2 {
        padding-top: 3rem;
        padding-bottom: 2rem;
    }

    @media only screen and (max-width: 680px) {
        padding: 1rem 2rem;
    }
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
`

const Home = () => {
    // Getting current "location":
    const location = useLocation()
    const pathID = location.pathname.split("/")[2]

    // Converting "pathID" to number.
    // "pathID" have typeof equals "string", but "id" on the other components is typeof "number".
    const id = parseInt(pathID)

    // Fetch Games:
    const dispatch = useDispatch()

    // As soon as the "App" component renders, we will "dispatch" loadGames() information:
    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    // Getting back the data:
    const { popularGames, newGames, upcomingGames, searchedGames } = useSelector((state) => state.games)
    //console.log("Popular Games:", popularGames)
    //console.log("New Games:", newGames)
    //console.log("Upcoming Games", upcomingGames)

    return (
        <GameList>
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>{pathID && <GameDetails id={id} />}</AnimatePresence>
                {/* 
                    "searchedGames" is an empty array, and it results in a "truthy" value.
                    So this way, we can just use "searchGames.length" instead.
                */}
                
                {!!searchedGames.length && (
                    <div className="searched">
                        <h2>Searched Games</h2>
                        <Games>
                            {searchedGames.map((game) => (
                                <Game key={game.id} id={game.id} name={game.name} image={game.background_image} released={game.released}/>
                            ))}
                        </Games>
                    </div>
                )}

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
            </AnimateSharedLayout>
        </GameList>
    )
}

export default Home
