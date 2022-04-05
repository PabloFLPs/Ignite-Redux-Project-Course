// An "action" is basically an object that contains information.
import axios from "axios"
import { newGamesURL, popularGamesURL, upcomingGamesURL } from "../api"

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
