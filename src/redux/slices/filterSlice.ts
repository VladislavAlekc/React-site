import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type activeTypeFilter = {
  name: string;
  sortParam: string;
};

interface FilterTypeState {
  search: string;
  activeFilter: activeTypeFilter;
  activeCategory: number;
  page: number;
  activeItem: number;
}

const initialState: FilterTypeState = {
  search: "",
  activeFilter: {
    name: "",
    sortParam: "",
  },
  activeCategory: 0,
  page: 1,
  activeItem: 0,
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setActiveItem(state, action: PayloadAction<number>) {
      state.activeItem = action.payload;
    },
    setActiveCategory(state, action: PayloadAction<number>) {
      state.activeCategory = action.payload;
    },
    setActiveFilter(state, action: PayloadAction<activeTypeFilter>) {
      state.activeFilter = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterTypeState>) {
      state.activeFilter = action.payload.activeFilter;
      state.page = Number(action.payload.page);
      state.activeCategory = Number(action.payload.activeCategory);
    },
  },
});

export const choiceActiveItem = (state: RootState) => state.filterSlice;
export const {
  setActiveItem,
  setActiveCategory,
  setActiveFilter,
  setPage,
  setFilters,
  setSearch,
} = filterSlice.actions;
export default filterSlice.reducer;
