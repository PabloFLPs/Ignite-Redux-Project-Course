// An "action" is basically an object that contains information.
import axios from "axios"
import { newGamesURL, popularGamesURL, upcomingGamesURL, searchGameURL } from "../api"

// Action Creator:
// "Action creators" are functions that creates the "actions".
export const loadGames = () => async (dispatch) => {
    // Fetch witch Axios:
    const popularData = await axios.get(popularGamesURL())
    const newData = await axios.get(newGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popularGames: popularData.data.results,
            newGames: newData.data.results,
            upcomingGames: upcomingData.data.results,
        },
    })
}

export const fetchSearched = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name))

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searchedGames: searchGames.data.results,
        }
    })
}
