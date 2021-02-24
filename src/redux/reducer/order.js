const initStateOrder = {
    name : 0
};

export const orderReducer = (state = initStateOrder, action) => {
    if ( action.type === 'SET_ORDER') {
        return {
            ...state,
            name : state.name
        }
    }
    return state;
}