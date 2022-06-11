// import React, { createContext, useReducer } from 'react'

// export const Store = createContext();

// const initialState= {
//     cart:{
//         cartItems:[]
//     },
// }

// const reducer = (state,action) =>{
//     switch(action.type){
//         case 'Cart_Item_Added':
//             return{
//                 ...state,
//                 cart: {
//                     ...state.cart,
//                     cartItems: [...state.cart.cartItems, action.playload]
//                 }
//             }
//         default:
//             return state;
//     }
// }

// export default function StoreItem(props) {
//     const [state, dispatch] = useReducer(reducer,initialState);
//     const value= {state,dispatch};
//   return <Store.Item value={value}> {props.Children} </Store.Item>
// }
