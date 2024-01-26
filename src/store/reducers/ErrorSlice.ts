import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    error: "",
};

export const errorSlice = createSlice({
    name: "errorSlice",
    initialState,
    reducers: {
        setValue(state, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    }
});

export default errorSlice.reducer;