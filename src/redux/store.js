import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducers/basketSlice";

const store = configureStore({
  reducer: { basket: basketReducer },
});

export default store;
