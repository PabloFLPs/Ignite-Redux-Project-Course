import axios from "axios"
import { gameDetailsURL } from "../api"

export const loadDetails = (id) => async (dispatch) => {
    const detailsData = await axios.get(gameDetailsURL(id))

    dispatch({
        type: "GET_DETAILS",
        payload: {
            game: detailsData.data,
        },
    })
}
