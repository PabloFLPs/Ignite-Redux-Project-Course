const initialState = {
    game: { platforms: [] },
    screen: { results: [] },
}

const detailsReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_DETAILS":
            return {
                ...state,
                game: action.payload.game,
            }
        default:
            return {...state}
    }
}

export default detailsReducer
