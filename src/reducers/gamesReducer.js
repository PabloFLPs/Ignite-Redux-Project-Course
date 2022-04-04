// Each reducer created have a "state", and this one have:
const initialState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
}

// So, "popular", "newGames" and "upcoming" are our this reducer initial state.

const gamesReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, popular: action.payload.popular}
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
