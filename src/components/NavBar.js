import React from "react"

// Animations:
import styled from "styled-components"
import { motion } from "framer-motion"
import logo from "../img/logo.svg"

const NavBar = () => {
    return (
        <StyledNavBar>
            <Logo>
                <img src={logo} alt="Logo Image" />
                <h1>Ignite</h1>
            </Logo>
            <div className="search">
                <input type="text" />
                <button>Search</button>
            </div>
        </StyledNavBar>
    )
}

const StyledNavBar = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;

    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        font-weight: bold;
    }

    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: white
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
