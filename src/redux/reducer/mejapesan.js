const initStateMeja = {
    nomorMeja : 0
};

export const cartReducer = (state = initStateMeja, action) => {
    if ( action.type === 'SET_MEJA') {
        return {
            ...state,
            nomorMeja : state.nomorMeja
        }
    }
    return state;
}