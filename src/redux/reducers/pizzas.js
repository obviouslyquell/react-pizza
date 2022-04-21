const initialState = {
    items: [],
    isLoaded:false
}

const filters = (state = initialState, action) =>{
    if(action.type === 'SET_PIZZAS'){
        return {
            ...state,
            items: action.payload,
            isLoaded:true
        }
    }
    return state;
}

export default filters