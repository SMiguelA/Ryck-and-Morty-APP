const initialState = {
    myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'addFavorite':
            console.log(state.myFavorites);
            return {...state, myFavorites: [...state.myFavorites, action.payload]};
        case 'removeFavorite':
            return {
                ...state, 
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                )};
        default:
            return {...state};
    }
}

export default rootReducer;