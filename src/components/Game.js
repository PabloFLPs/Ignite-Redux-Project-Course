import React from "react"

// Styling and Animation:
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.4);
    text-align: center;
    border-radius: 0.4rem;
    img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
    }
`

const Game = ({ name, image, released }) => {
    return (
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name + " - Background Image"}/>
        </StyledGame>
    )
}

export default Game
