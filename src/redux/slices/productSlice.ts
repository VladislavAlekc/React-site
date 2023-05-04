import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export type TypeParams = {
  order: string;
  sortBy: string;
  activeCat: string;
  searchValue: string;
  page: string;
};
type ItemsType = {
  id: string;
  title: string;
  categories: string;
  sizes: string[];
  price: number;
  image: string;
};
export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
interface productTypeState {
  items: ItemsType[];
  status: Status;
}

export const fetchCatalog = createAsyncThunk(
  "productSlice/fetchCatalogStatus",
  async (params: TypeParams) => {
    const { order, sortBy, activeCat, searchValue, page } = params;
    const res = await axios.get<ItemsType[]>(
      `https://64002da19f844910298a8928.mockapi.io/items?&page=${page}&${activeCat}&limit=6&sortBy=${sortBy}&order=${order}&${searchValue} `
    );
    return res.data as ItemsType[];
  }
);

const initialState: productTypeState = {
  items: [],
  status: Status.LOADING, // loading | success | error
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchCatalog.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
  // extraReducers: {
  //   [fetchCatalog.pending]: (state) => {
  //     state.status = "loading";
  //     state.items = [];
  //   },
  //   [fetchCatalog.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = "success";
  //   },
  //   [fetchCatalog.rejected]: (state, action) => {
  //     state.status = "error";
  //     state.items = [];
  //   },
  // },
});
export const { setItems } = productSlice.actions;
export default productSlice.reducer;
