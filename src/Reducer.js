export const initialState ={
    basket:[]
};

function reducer(state, action){
    console.log('action==>', action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
          return {state};
        case 'REMOVE_FROM_BASKET':
            // login for removing item from basket
            return {state};        
        default:
            return state;  
    }
}
export default reducer;