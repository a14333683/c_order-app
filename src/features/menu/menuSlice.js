// features/menu/menuSlice.js
import { createSlice } from "@reduxjs/toolkit";
// import { image } from "framer-motion/client";

const initialState = {
  items: [
    { id: 1, name: "漢堡", price: 50, category: "漢堡類", image: "./assets/images/hamburger.png" },
    { id: 2, name: "黑胡椒鐵板麵", price: 60, category: "鐵板麵", image: "./assets/images/noodles.png" },
    { id: 3, name: "原味蛋餅", price: 30, category: "蛋餅類", image: "./assets/images/egg.png" },
    { id: 4, name: "蘿蔔糕", price: 40, category: "點心類", image: "./assets/images/radish.png" },
  ],
  cart: [],
  lastOrder:null,
};
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    //新增菜單
    addToCart: (state, action) => {
      const { id, note } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        state.cart.push({
          ...item,
          note: note || "", // 備註欄
        });
      } 
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((_, idx) => idx !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
    saveOrder: (state, action) => {
      state.lastOrder = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart ,saveOrder} = menuSlice.actions;
console.log(menuSlice.reducer)
export default menuSlice.reducer;
