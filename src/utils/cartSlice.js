import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
     name: "cart",
     initialState: {
          items: []
     },
     reducers: {
          addItem: (state, action) => {
               // mutating the state directly is allowed in Redux Toolkit
               // Redux use immer behind the scene 
               //  in older version we dont allowed to mutate
               state.items.push(action.payload);
          },
          removeItem: (state, action) => {
               state.items.pop(action.payload);
          },
          clearCart: (state) => {
               state.items.length = 0;
          }
     }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;