import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",

  initialState: {
    items: [],
  },

  reducers: {
    addToBasket: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },

    clearBasket: (state) => {
      state.items = [];
    },

    removeFromBasket: (state, action) => {
      const id = action.payload;

      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const { addToBasket, clearBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
