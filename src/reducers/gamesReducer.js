// Each reducer created have a "state", and this one have:
const initialState = {
    popular: [],
    newGames: [],
    upcomingGames: [],
}

// So, "popular", "newGames" and "upcomingGames" are our this reducer initial state.

const gamesReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state}
        default:
            return {...state}
    }
}

export default gamesReducer
