const initStateCart = {
    totalOrder : 0
};

export const cartReducer = (state = initStateCart, action) => {
    if ( action.type === 'SET_TAMBAH') {
        return {
            ...state,
            totalOrder : state.totalOrder + 1
        }
    }
    return state;
}