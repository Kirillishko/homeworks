import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { productService } from "../api/ProductService";
import headerSearchInputSlice from "./reducers/HeaderSearchInputSlice";
import errorSlice from "./reducers/ErrorSlice";

const rootReducer = combineSlices({
    errorSlice,
    headerSearchInputSlice,
    [productService.reducerPath]: productService.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(productService.middleware)
    });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]