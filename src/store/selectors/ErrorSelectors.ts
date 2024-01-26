import { RootState } from "../store";

export const all = (state: RootState) => state.errorSlice;
export const error = (state: RootState) => state.errorSlice.error;