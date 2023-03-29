import axios from "axios";

const initialState = {
    myFavorites: [],
};

const rootReducer = async (state = initialState, action) => {
    switch(action.type){
        case 'addFavorite':
            try{
                return await axios.post("http://localhost:3001/rickandmorty/fav", action.payload)
            }catch(error){
                console.log(error);
            }
        case 'removeFavorite':
            try{
                return await axios.delete(`http://localhost:3001/rickandmorty/fav/${action.payload}`);
            }catch(error){
                console.log(error);
            }
        default:
            return {...state};
    }
}

export default rootReducer;

