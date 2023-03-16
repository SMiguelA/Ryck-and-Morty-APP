export const addFavorite = (characer) => {
    console.log(characer)
    return{
        type: 'addFavorite',
        payload: characer,
    };
};

export const removeFavorite = (id) => {
    return{
        type: 'removeFavorite',
        payload: id,
    };
};