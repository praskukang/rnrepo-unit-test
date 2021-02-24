const initStateOrder = {
    quantity : 0
};

export const orderReducer = (state = initStateOrder, action) => {
    if ( action.type === 'SET_TAMBAH') {
        return {
            ...state,
            quantity : action.value.quantity
        }
    }
    return state;
}