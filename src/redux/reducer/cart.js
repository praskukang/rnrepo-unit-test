const initStateCart = {
    quantity : 0
};

export const cartReducer = (state = initStateCart, action) => {
    if ( action.type === 'SET_TAMBAH') {
        return {
            ...state,
            quantity : action.value.quantity
        }
    }
    return state;
}