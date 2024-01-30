import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    searchInput: '',
};

export const headerSearchInputSlice = createSlice({
    name: 'headerSearchInputSlice',
    initialState,
    reducers: {
        updateValue(state, action: PayloadAction<string>) {
            state.searchInput = action.payload;
        }
    }
});

export default headerSearchInputSlice.reducer;