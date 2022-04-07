import React from "react"

// Styling and Animation:
import styled from 'styled-components'
import { motion } from 'framer-motion'

// Redux:
import { useDispatch } from "react-redux"
import { loadDetails } from "../actions/detailsAction"

import { Link } from 'react-router-dom'

import { smallImage } from "../util"

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.4);
    text-align: center;
    border-radius: 0.4rem;
    cursor: pointer;
    overflow: hidden;

    img {
        width: 100%;
        height: 30vh;
        object-fit: cover;
    }
`

const Game = ({ id, name, image, released }) => {
    // Load Details:
    const dispatch = useDispatch()

    // Load Details Handler:
    const loadDetailsHandler = () => {
        dispatch(loadDetails(id))
    }

    return (
        <StyledGame layoutId={id} onClick={loadDetailsHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img src={smallImage(image, 640)} layoutId={`image ${id}`} alt={name + " - Background Image"}/>
            </Link>
        </StyledGame>
    )
}

export default Game
