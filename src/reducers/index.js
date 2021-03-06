// We will have multiple reducers, so:
import { combineReducers } from "redux"

import gamesReducer from "./gamesReducer"
import detailsReducer from "./detailsReducer"

const rootReducer = combineReducers({
    games: gamesReducer,
    details: detailsReducer,
})

export default rootReducer
