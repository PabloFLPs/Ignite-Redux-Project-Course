import React from "react"

// Styling and Animation:
import styled from "styled-components"
import { motion } from "framer-motion"

// Redux:
import { useSelector } from "react-redux"

import { useNavigate } from "react-router-dom"

import { smallImage } from "../util"

// Platforms Icons:
import playstation from "../img/playstation.svg"
import steam from "../img/steam.svg"
import xbox from "../img/xbox.svg"
import nintendo from "../img/nintendo.svg"
import apple from "../img/apple.svg"
import gamepad from "../img/gamepad.svg"

// Rating Stars:
import emptyStar from "../img/star-empty.png"
import fullStar from "../img/star-full.png"

const GameDetails = ({ id }) => {
    const navigate = useNavigate()

    // Exit Game Details Card:
    const exitDetailCardHandler = (event) => {
        const element = event.target
        if(element.classList.contains("card-shadow")){
            document.body.style.overflow = "auto"
            navigate("/")
        }
    }

    // Getting Platforms Icons:
    const getPlatform = (platform) => {
        switch(platform){
            case "Playstation 4":
                return playstation
            case "Xbox One":
                return xbox
            case "PC":
                return steam
            case "Nintendo Switch":
                return nintendo
            case "iOS":
                return apple
            default:
                return gamepad
        }
    }

    // Getting Stars:
    const getStars = () => {
        const stars = []
        const rating = Math.floor(game.rating)

        for(let starsNumber = 1; starsNumber <= 5; starsNumber++){
            if(starsNumber <= rating) stars.push(<img key={starsNumber} src={fullStar} alt="Full Star Icon" />)
            else stars.push(<img key={starsNumber} src={emptyStar} alt="Empty Star Icon" />)
        }

        return stars
    }

    // Getting details data:
    const { game, screen, isLoading } = useSelector((state) => state.details)
    //console.log(game, screen, isLoading)

    // Preventing scrolling behind game details card:
    if(!isLoading) document.body.style.overflow = "hidden"

    return (
        <>
            {!isLoading && (
                <CardShadow className="card-shadow" onClick={exitDetailCardHandler}>
                    <Detail className="detail" layoutId={id}>
                        <Stats className="stats">
                            <div className="rating">
                                <motion.h3 layoutId={`title ${id}`}>{game.name}</motion.h3>
                                <p>Rating: {game.rating}</p>
                                {getStars()}
                            </div>
                            <Info className="info">
                                <h3>Platforms</h3>
                                <Platforms className="platforms">
                                    {game.platforms.map((data) => (
                                        <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name + " - Icon"} />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media className="media">
                            <motion.img src={smallImage(game.background_image, 1280)} layoutId={`image ${id}`} alt={game.name + " - Background Image"} />
                        </Media>
                        <Description className="description">
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map((screen) => (
                                <img key={screen.id} src={smallImage(screen.image, 1280)} alt={game.name + " - Screenshots"} />
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

    img {
        display: inline;
        width: 1.4rem;
        height: 1.4rem;
    }
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
