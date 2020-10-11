export const initialState ={
    basket:[{
        id: "123456",
        title: "Samsung 6.0 Kg Fully-Automatic 5 Star Front Loading Washing Machine (WW60R20GLMA/TL, White)",
        price: 12000,
        rating: 4,
        image: "https://images-na.ssl-images-amazon.com/images/I/61JkCI7uuYL._SL1335_.jpg",
    }]
};

function reducer(state, action){
    console.log('action==>', action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
          return {
              ...state,
              basket: [...state.basket, action.item]
            };
            
        case 'REMOVE_FROM_BASKET':
            // login for removing item from basket
            return {state};        
        default:
            return state;  
    }
}
export default reducer;