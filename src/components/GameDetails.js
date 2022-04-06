import React from "react"

// Styling and Animation:
import styled from "styled-components"
import { motion } from "framer-motion"

// Redux:
import { useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"

const GameDetails = () => {
    const navigate = useNavigate()

    // Exit Game Details Card:
    const exitDetailCardHandler = (event) => {
        const element = event.target
        if(element.classList.contains("card-shadow")){
            document.body.style.overflow = "auto"
            navigate("/")
        }
    }

    // Getting details data:
    const { game, screen, isLoading } = useSelector((state) => state.details)
    console.log(game, screen, isLoading)

    // Preventing scrolling behind game details card:
    if(!isLoading) document.body.style.overflow = "hidden"

    return (
        <>
            {!isLoading && (
                <CardShadow className="card-shadow" onClick={exitDetailCardHandler}>
                    <Detail className="detail">
                        <Stats className="stats">
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <Info className="info">
                                <h3>Platforms</h3>
                                <Platforms className="platforms">
                                    {game.platforms.map((data) => (
                                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media className="media">
                            <img src={game.background_image} alt={game.name + " - Background Image"} />
                        </Media>
                        <Description className="description">
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map((screen) => (
                                <img key={screen.id} src={screen.image} alt={game.name + " - Screenshots"} />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;

    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 0.4rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;

    img {
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;

    img {
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;

    img {
        width: 100%;
    }
`

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default GameDetails
