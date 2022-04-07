// Reducers are the logic itself that will implement the referred action intention/objective.

// Each reducer created have a "state", and this one have:
const initialState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searchedGames: [],
}

// So, "popular", "newGames" and "upcoming" are our this reducer initial state.

const gamesReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {
                ...state, 
                popularGames: action.payload.popularGames,
                newGames: action.payload.newGames,
                upcomingGames: action.payload.upcomingGames,
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searchedGames: action.payload.searchedGames,
            }
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searchedGames: [],
            }
        default:
            return {...state}
    }
}

// Action Creator:
const fetchGames = (userData) => {
    return {
        type: "FETCH_GAMES",
        payload: userData,
    }
}

export default gamesReducer
