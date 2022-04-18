import React, { useState } from "react"

// Animations:
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../img/logo.svg"

// Redux and Routing:
import { fetchSearched } from "../actions/gamesAction"
import { useDispatch } from "react-redux"

const NavBar = () => {
    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState("")

    const inputHandler = (event) => {
        setTextInput(event.target.value)
    }

    const submitSearch = (event) => {
        event.preventDefault()
        dispatch(fetchSearched(textInput))
        setTextInput("")
    }

    const clearSearched = () => {
        dispatch({
            type: "CLEAR_SEARCHED",
        })
    }

    return (
        <StyledNavBar>
            <Logo onClick={clearSearched}>
                <img src={logo} alt="Logo Image" />
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input type="text" value={textInput} onChange={inputHandler} />
                <button type="submit" onClick={submitSearch}>Search</button>
            </form>
        </StyledNavBar>
    )
}

const StyledNavBar = styled(motion.div)`
    padding-top: 5rem;
    text-align: center;

    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
        font-weight: bold;
    }

    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.3);
        color: black;
    }

    @media only screen and (max-width: 680px) {
        button {
            padding: 0.5rem 0.5rem;
        }
    }
`

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;

    img {
        width: 2rem;
        height: 2rem;
    }
`

export default NavBar
