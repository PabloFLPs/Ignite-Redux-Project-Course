// If facing cannot map() trough 'undefined', try to initialize the state properties.
const initialState = {
    game: { platforms: [] },
    // map((platform) => game.platform)
    screen: { results: [] },
    // map((result) => screen.results)
}

const detailsReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_DETAILS":
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false,
            }
        case "LOADING_DETAILS":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return {...state}
    }
}

export default detailsReducer
