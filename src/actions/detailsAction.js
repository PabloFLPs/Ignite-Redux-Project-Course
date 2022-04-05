import axios from "axios"
import { gameDetailsURL } from "../api"

const loadDetails = (id) => async (dispatch) => {
    const detailsData = await axios.get(gameDetailsURL())

    dispatch({
        type: "GET_DETAILS",
        payload: {
            game: detailsData.data,
        },
    })
}

export default loadDetails
