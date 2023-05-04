import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getProductLocalStorage } from "../../utils/getProductLocalStorage";
import { RootState } from "../store";

export type CartItemType = {
  id: string;
  title: string;
  categories: string;
  sizes: string;
  price: number;
  image: string;
  count: number;
};

interface CartTypeState {
  totalPrice: number;
  items: CartItemType[];
}

const { json, totalPriceItems } = getProductLocalStorage();

const initialState: CartTypeState = {
  totalPrice: totalPriceItems,
  items: json,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeToCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearToCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cartSlice; // best practice for short name Selector

export const { addToCart, removeToCart, clearToCart, minusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
