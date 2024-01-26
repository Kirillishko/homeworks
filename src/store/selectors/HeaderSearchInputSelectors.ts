import { RootState } from "../store";

export const all = (state: RootState) => state.headerSearchInputSlice;
export const searchInput = (state: RootState) => state.headerSearchInputSlice.searchInput;