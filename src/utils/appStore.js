const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice.js";


const appStore = configureStore({
     reducer: {
          cart: cartReducer,
     }
});

export default appStore;